import { useSpareMatrixOperations, useSpareMatrixStore } from '../state/spare-matrix'

export const Board = () => {
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
                  className="destiny-button p-4 rounded-md epoch-cursor w-10 h-10 md:w-16 md:h-16 disabled:bg-opacity-100 disabled:cursor-default text-white"
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
