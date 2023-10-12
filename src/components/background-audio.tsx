import { useEffect, useState } from 'react'

export const BackgroundAudio = ({ play = false }: { play?: boolean }) => {
  const [audio, setAudio] = useState<HTMLAudioElement>()
  useEffect(() => {
    if (play && !audio) {
      const audioInstance = new Audio('/background-music.mp3')
      audioInstance.loop = true
      audioInstance.play()
      setAudio(audioInstance)
    }
  }, [play, audio])

  return <></>
}
