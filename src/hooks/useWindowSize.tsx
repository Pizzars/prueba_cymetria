import { useState, useEffect } from 'react'

interface WindowSize {
  width: number | undefined
  height: number | undefined
}

/**
 * Custom hook that returns the current window size.
 * @returns An array containing the width and height of the window.
 */

const useWindowSize = (): [number | undefined, number | undefined] => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return [windowSize.width, windowSize.height]
}

export default useWindowSize
