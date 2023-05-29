import { useState, useEffect, useRef } from 'react'

interface Dimensions {
  width: number | undefined
  height: number | undefined
}

/**
 * Hook que proporciona las dimensiones actuales de un elemento.
 * @returns Un objeto con las propiedades `width` y `height` que representan las dimensiones del elemento.
 */
function useDimensions(): [number | undefined, number | undefined] {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: undefined,
    height: undefined
  })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = (): void => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight
        })
      }
    }

    handleResize() // Obtener dimensiones iniciales

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return [dimensions.width, dimensions.height]
}

export default useDimensions
