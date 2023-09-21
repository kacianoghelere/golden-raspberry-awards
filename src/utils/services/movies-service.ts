import { MoviesList } from '~/@types/movies'
import { getApiData } from '~/utils/services/http-service'

export interface GetMoviesListParams {
  onlyWinners?: boolean,
  page?: number,
  size?: number,
  year?: string
}

export const getMoviesList = async ({
  onlyWinners = false,
  page = 1,
  size = 20,
  year = ''
}: GetMoviesListParams = {}) => (
  await getApiData<MoviesList>({
    winner: onlyWinners ? 'true' : null,
    page,
    size,
    year
  })
)