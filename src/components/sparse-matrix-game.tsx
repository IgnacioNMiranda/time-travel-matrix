import { useSpareMatrixOperations, useSpareMatrixStore } from '../state/spare-matrix'

export const SparseMatrixGame = () => {
  const { rows, columns } = useSpareMatrixStore()
  const { getNode, addNode } = useSpareMatrixOperations()

  return (
    <section className="flex flex-col justify-evenly gap-2">
      {new Array(rows).fill(null)?.map((_, rowIdx) => {
        return (
          <div key={`row-${rowIdx}`} className="flex justify-evenly gap-2">
            {new Array(columns).fill(null)?.map((_, colIdx) => {
              const node = getNode(rowIdx, colIdx)

              return (
                <button
                  className="p-4 rounded-md bg-[#F5BB86] hover:bg-[#F27306] epoch-cursor transition-colors w-10 h-10 md:w-16 md:h-16 disabled:bg-gray-200 disabled:cursor-default"
                  key={`row-${rowIdx}:col-${colIdx}`}
                  onClick={() => addNode(rowIdx, colIdx)}
                  disabled={!!node}
                >
                  {node && 'y'}
                  {!node && `${rowIdx}-${colIdx}`}
                </button>
              )
            })}
          </div>
        )
      })}
    </section>
  )
}
