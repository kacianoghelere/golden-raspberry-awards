import { SerializedError } from '@reduxjs/toolkit'

import { MoviesList } from '~/@types/movies/movies-list'

export interface MoviesListState {
  data?: MoviesList
  error?: SerializedError
  isLoading: boolean
}