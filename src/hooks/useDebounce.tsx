import { useState, useEffect } from 'react'

/**
 * Hook que aplica un retraso a la actualización de un valor, evitando ejecuciones excesivas.
 * @param value El valor que se desea retrasar.
 * @param delay El tiempo de retraso en milisegundos.
 * @returns El valor retrasado.
 */
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
