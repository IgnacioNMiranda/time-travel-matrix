import { create } from 'zustand'

interface SpareMatrixState {
  rows: number
  columns: number
  setDimensions: (rows: number, columns: number) => void
}

export const useSpareMatrixStore = create<SpareMatrixState>((set) => ({
  rows: 0,
  columns: 0,
  setDimensions: (rows: number, columns: number) => set(() => ({ rows, columns })),
}))
