import { RefObject, useEffect } from 'react'

/**
 * Hook that detects clicks outside a specific element.
 * @param ref The reference to the element you want to observe.
 * @param callback The callback function to be executed when a click outside the element occurs.
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
