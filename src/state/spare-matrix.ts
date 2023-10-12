import { create } from 'zustand'

interface SpareMatrixState {
  rows?: number
  columns?: number
  baseRow?: Node[]
  baseColumn?: Node[]
  initMatrix: (rows: number, columns: number) => void
}

interface Node {
  row: number
  column: number
  leftNode?: Node
  downNode?: Node
}

export const useSpareMatrixStore = create<SpareMatrixState>((set) => ({
  initMatrix: (rows: number, columns: number) =>
    set(() => {
      const baseRow = new Array(rows).fill(null).map((_, idx) => ({ row: idx, column: -1 }))
      const baseColumn = new Array(rows).fill(null).map((_, idx) => ({ row: -1, column: idx }))

      return { rows, columns, baseRow, baseColumn }
    }),
}))
