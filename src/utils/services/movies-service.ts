import axios from 'axios'

import { MoviesList } from '~/@types/movies/movies-list'
import { API_BASE_URL } from '~/utils/constants/api'

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
}: GetMoviesListParams = {}) => {
  const response = await axios.get<MoviesList>(API_BASE_URL, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    params: {
      winner: onlyWinners ? 'true' : null,
      page,
      size,
      year
    }
  })

  return response
}