import { useState, useEffect } from 'react'

/**
 * Hook that applies a delay to the update of a value, preventing excessive executions.
 * @param value The value to be debounced.
 * @param delay The delay time in milliseconds.
 * @returns The debounced value.
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
