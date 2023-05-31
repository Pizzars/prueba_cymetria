import { useState, useCallback } from 'react'

/**
 * Hook that provides a function to toggle between two boolean states.
 * @param initialValue The initial value of the boolean state.
 * @returns An array with the current boolean state and the function to toggle the state.
 */

function useToggle(initialValue: boolean): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initialValue)

  const toggleValue = useCallback(() => {
    setValue(prevValue => !prevValue)
  }, [])

  return [value, toggleValue]
}

export default useToggle
