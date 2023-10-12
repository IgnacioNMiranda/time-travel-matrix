import { BackgroundAudio } from './components/background-audio'
import './styles.css'
import { useSpareMatrixStore } from './state/spare-matrix'
import { DimensionsForm } from './components/dimensions-form'
import { useMemo } from 'react'
import { SparseMatrixGame } from './components/sparse-matrix-game'

function App() {
  const { rows, columns } = useSpareMatrixStore()

  const isSetup = useMemo(() => !!rows && !!columns, [rows, columns])

  return (
    <main
      className="h-screen grid place-items-center"
      style={{
        background: `url('/background-image.webp')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {!isSetup && <DimensionsForm />}

      {isSetup && <SparseMatrixGame />}

      <BackgroundAudio play={isSetup} />
    </main>
  )
}

export default App
