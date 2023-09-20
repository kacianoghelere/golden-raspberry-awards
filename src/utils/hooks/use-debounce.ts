import { useCallback, useRef } from 'react'

const useDebounce = () => {
  const debounceId = useRef<NodeJS.Timeout>()

  const debouncedCallback = useCallback((callback: () => void, delay = 500) => {
    clearTimeout(debounceId.current)

    debounceId.current = setTimeout(callback, delay)
  }, [debounceId.current])

  return debouncedCallback
}

export default useDebounce