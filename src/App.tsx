import { AudioManager } from './components/audio-manager'
import { useSpareMatrixStore } from './state/spare-matrix'
import { DimensionsForm } from './components/dimensions-form'
import { SparseMatrixGame } from './components/sparse-matrix-game'
import { TextBox } from './components/text-box'
import { useBackgroundStyle } from './hooks/use-background-style'

import './css/tailwind.css'
import './css/cursor.css'
import './css/fonts.css'

function App() {
  const { isInit } = useSpareMatrixStore()
  const backgroundStyle = useBackgroundStyle()

  return (
    <main className="h-screen grid place-items-center px-4 relative chrono-font" style={backgroundStyle}>
      {!isInit && <DimensionsForm />}

      {isInit && <SparseMatrixGame />}

      {isInit && <TextBox />}

      <AudioManager play={isInit} />
    </main>
  )
}

export default App
