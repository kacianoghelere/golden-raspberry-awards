import { useQuery } from '@tanstack/react-query'

import { getMoviesList } from '~/utils/services/movies-service'

const useMoviesList = () => {
  const query = useQuery({
    queryKey: ['moviesList'],
    queryFn: () => getMoviesList()
  })

  return query
}

export default useMoviesList