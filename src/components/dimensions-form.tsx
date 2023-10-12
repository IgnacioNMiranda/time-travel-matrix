import { useState, FormEventHandler } from 'react'
import { useSpareMatrixStore } from '../state/spare-matrix'

export const DimensionsForm = () => {
  const [inputError, setInputError] = useState(false)
  const [errorTimeout, setErrorTimeout] = useState<number>()

  const { setDimensions } = useSpareMatrixStore()

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
      setDimensions(rowsNumber, columnsNumber)
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
      className="bg-[#F5BB86] w-auto md:w-108 px-4 md:pl-4 md:pr-0 pb-3 pt-1 md:py-3 rounded-md flex flex-col md:flex-row items-center md:items-start"
      onSubmit={onSubmit}
    >
      <section className="flex flex-col gap-2 w-full md:w-auto">
        <div className="flex gap-2 justify-between items-center">
          <p className="text-[#265D5C] font-semibold text-sm md:text-base">Input matrix dimensions:</p>

          <div className="flex gap-2">
            <input type="number" className="w-12 md:w-16 h-7" name="rows" required />
            <input type="number" className="w-12 md:w-16 h-7" name="columns" required />
          </div>
        </div>

        {inputError && <span className="text-red-500 font-bold text-center">Please input valid dimensions!</span>}

        <button className="w-full rounded px-4 py-2 bg-[#A6002B] hover:bg-[#450000] focus:bg-[#F27306] transition-colors text-white font-medium">
          Travel through time!
        </button>
      </section>

      <section className="flex flex-col justify-center order-first md:order-none pb-2 md:pb-0">
        <img src="/chrono.gif" alt="chrono-dancing" width={80} />
      </section>
    </form>
  )
}
