import { create } from 'zustand'
import { matrix, Matrix } from 'mathjs'

interface SpareMatrixState {
  rows?: number
  columns?: number
  isInit: boolean
  sparseMatrix: Matrix
  initMatrix: (rows: number, columns: number) => void
  updateMatrix: (matrix: Matrix) => void
}

export const useSpareMatrixStore = create<SpareMatrixState>((set) => ({
  sparseMatrix: matrix('sparse'),
  isInit: false,
  initMatrix: (rows: number, columns: number) =>
    set((state) => {
      const colValue = columns > 10 ? 10 : columns
      const rowValue = rows > 10 ? 10 : rows

      const sparseMatrix = state.sparseMatrix.resize([rowValue, colValue])

      return { rows: rowValue, columns: colValue, sparseMatrix, isInit: true }
    }),
  updateMatrix: (matrix: Matrix) => set(() => ({ sparseMatrix: matrix })),
}))

export const useSpareMatrixOperations = () => {
  const { sparseMatrix, updateMatrix } = useSpareMatrixStore()

  const getNode = (row: number, column: number) => {
    return sparseMatrix?.get([row, column])
  }

  const addNode = (row: number, column: number) => {
    sparseMatrix?.set([row, column], '1')
    updateMatrix(sparseMatrix)
  }

  return { getNode, addNode }
}
