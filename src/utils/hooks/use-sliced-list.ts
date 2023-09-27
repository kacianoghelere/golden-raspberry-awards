import { useMemo } from 'react'

const useSlicedList = <T>(list: T[] | undefined, limit: number): T[] => {
  const slicedList = useMemo(() => {
    const fullList = (list || [])

    return fullList.slice(0, limit)
  }, [limit, list])

  return slicedList
}

export default useSlicedList