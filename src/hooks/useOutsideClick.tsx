import { RefObject, useEffect } from 'react'

/**
 * Hook que detecta clics realizados fuera de un elemento específico.
 * @param ref La referencia al elemento que se desea observar.
 * @param callback La función de callback que se ejecutará cuando se haga clic fuera del elemento.
 */

function useOutsideClick(ref: RefObject<HTMLElement>, callback: () => void): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])
}

export default useOutsideClick
