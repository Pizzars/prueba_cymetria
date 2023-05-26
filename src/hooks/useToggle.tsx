import { useState, useCallback } from 'react'

/**
 * Hook que proporciona una función para alternar entre dos estados booleanos.
 * @param initialValue El valor inicial del estado booleano.
 * @returns Un array con el estado booleano actual y la función para alternar el estado.
 */
function useToggle(initialValue: boolean): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initialValue)

  const toggleValue = useCallback(() => {
    setValue(prevValue => !prevValue)
  }, [])

  return [value, toggleValue]
}

export default useToggle
