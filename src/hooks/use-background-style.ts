import { useEffect, useState } from 'react'

export const useBackgroundStyle = () => {
  const [backgroundIndex, setBackgroundIndex] = useState<number>(1)

  useEffect(() => {
    // This works because background images are named with a number.
    const interval = setInterval(() => {
      setBackgroundIndex((currIndex) => {
        if (currIndex >= 7) return 1
        return currIndex + 1
      })
    }, 10000)

    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    backgroundImage: `url('/images/backgrounds/${backgroundIndex}.png')`,
    imageRendering: 'pixelated',
    transition: 'background-image 5s ease-in-out',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  } as React.HTMLAttributes<HTMLElement>['style']
}
