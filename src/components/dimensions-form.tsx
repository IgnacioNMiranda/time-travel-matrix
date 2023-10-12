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
    <form className="bg-[#F5BB86] w-108 pl-4 py-3 rounded-md flex" onSubmit={onSubmit}>
      <section className="flex flex-col gap-2">
        <div className="flex gap-2 justify-between">
          <p className="text-[#265D5C] font-semibold">Input matrix dimensions:</p>

          <input type="number" className="w-16 h-7" name="rows" required />
          <input type="number" className="w-16 h-7" name="columns" required />
        </div>

        {inputError && <span className="text-red-500 font-bold text-center">Please input valid dimensions!</span>}

        <button className="w-full rounded px-4 py-2 bg-[#A6002B] text-white">Travel through time!</button>
      </section>

      <section className="flex flex-col justify-center">
        <img src="/chrono.gif" alt="chrono-dancing" width={80} />
      </section>
    </form>
  )
}
