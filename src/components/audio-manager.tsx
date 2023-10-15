import { useEffect, useState } from 'react'

export const AudioManager = ({ play = false }: { play?: boolean }) => {
  const [mainBackgroundAudio, setMainBackgroundAudio] = useState<HTMLAudioElement>()

  useEffect(() => {
    if (play && !mainBackgroundAudio) {
      const audioInstance = new Audio('/background-audio.mp3')
      audioInstance.loop = true
      // audioInstance.play()
      setMainBackgroundAudio(audioInstance)
    }
  }, [play, mainBackgroundAudio])

  return <></>
}
