import axios from 'axios'

import { MoviesList } from '~/@types/movies/movies-list'
import { API_BASE_URL } from '~/utils/constants/api'

export const getMoviesList = async ({
  page = 1,
  size = 20
} = {}) => {
  const response = await axios.get<MoviesList>(API_BASE_URL, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    params: {
      page,
      size
    }
  })

  return response
}