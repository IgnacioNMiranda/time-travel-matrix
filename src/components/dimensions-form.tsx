import { useState, FormEventHandler } from 'react'
import { useSpareMatrixStore } from '../state/spare-matrix'

export const DimensionsForm = () => {
  const [inputError, setInputError] = useState(false)
  const [errorTimeout, setErrorTimeout] = useState<number>()

  const { initMatrix } = useSpareMatrixStore()

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const formObject = Object.fromEntries(formData)
    const { rows, columns } = formObject

    const rowsNumber = parseInt(rows as string)
    const columnsNumber = parseInt(columns as string)

    if (
      rows &&
      columns &&
      !Number.isNaN(rowsNumber) &&
      !Number.isNaN(columnsNumber) &&
      rowsNumber > 0 &&
      columnsNumber > 0
    ) {
      document.body.classList.add('epoch-cursor')
      initMatrix(rowsNumber, columnsNumber)
    } else {
      setInputError(true)
      if (errorTimeout) clearTimeout(errorTimeout)
      const timeout = setTimeout(() => {
        setInputError(false)
      }, 2500)
      setErrorTimeout(timeout)
    }
  }

  return (
    <form
      style={{
        backgroundImage: `url('/images/text-box/text-box-1.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}
      className="w-auto md:w-108 px-4 md:pl-4 md:pr-0 py-3 md:py-6 rounded-md flex flex-col md:flex-row items-center justify-center"
      onSubmit={onSubmit}
    >
      <section className="flex flex-col gap-2 w-full md:w-auto items-center">
        <div className="flex gap-2 justify-between items-center">
          <p className="text-white font-semibold text-lg md:text-xl">Input matrix dimensions:</p>

          <div className="flex gap-2">
            <input type="number" className="w-12 md:w-16 h-7 text-xl p-1" name="rows" required max={10} />
            <input type="number" className="w-12 md:w-16 h-7 text-xl p-1" name="columns" required max={10} />
          </div>
        </div>

        {inputError && (
          <span className="text-[#F27306] font-bold text-center text-xl mt-4 tracking-widest">
            Please input valid dimensions!
          </span>
        )}

        <button className="hand-cursor travel-button w-fit rounded text-white font-medium text-lg md:text-xl md:mt-4 tracking-widest">
          Travel through time!
        </button>
      </section>

      <section className="flex flex-col justify-center order-first md:order-none pb-2 md:pb-0">
        <img src="/chrono.gif" alt="chrono-dancing" width={80} />
      </section>
    </form>
  )
}
