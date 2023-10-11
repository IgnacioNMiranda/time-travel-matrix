import { useState } from 'react'
import { BackgroundAudio } from './components/background-audio'
import './styles/tailwind.css'

function App() {
  const [hasStart, setHasStart] = useState(false)

  return (
    <main>
      <div className="h-screen">
        <div className="flex justify-center items-center flex-col gap-4">
          <h1 className="text-red-700 text-xl">Time Travel Sparse Matrix</h1>
          {!hasStart && (
            <button className="rounded px-4 py-2 bg-green-300" onClick={() => setHasStart(true)}>
              Start :D
            </button>
          )}
        </div>

        <BackgroundAudio play={hasStart} />
      </div>
    </main>
  )
}

export default App
