import { AsyncThunk, SerializedError, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { MoviesList } from '~/@types/movies'
import { MoviesListState } from '~/@types/store/modules/movies/list'
import { RootState } from '~/store'
import {
  GetMoviesListParams,
  getMoviesList
} from '~/utils/services/movies-service'

const initialState: MoviesListState = {
  data: undefined,
  error: undefined,
  isLoading: false
}

const moduleName = 'movies/list'

const fetchMovies = createAsyncThunk<MoviesList, GetMoviesListParams>(
  `${moduleName}/fetch`,
  async (params) => {
    const response = await getMoviesList(params)

    return response.data
  }
)

const fetchNextPage = createAsyncThunk<MoviesList>(
  `${moduleName}/next-page`,
  async (_arg, thunkApi) => {
    const { movies: { data } } = thunkApi.getState() as RootState

    const response = await getMoviesList({ page: data!.number + 1 })

    return response.data
  }
)

const fetchPreviousPage = createAsyncThunk<MoviesList>(
  `${moduleName}/previous-page`,
  async (_arg, thunkApi) => {
    const { movies: { data } } = thunkApi.getState() as RootState

    const response = await getMoviesList({ page: data!.number - 1 })

    return response.data
  }
)

export const AsyncActions = {
  fetchMovies,
  fetchNextPage,
  fetchPreviousPage
}

type GenericAsyncThunk = AsyncThunk<MoviesList, unknown, any>

const moviesSlice = createSlice({
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher<ReturnType<GenericAsyncThunk['pending']>>(
        ({ type }) => type.endsWith('/pending'),
        (state) => {
          state.error = undefined
          state.isLoading = true
        }
      )
      .addMatcher<ReturnType<GenericAsyncThunk['fulfilled']>>(
        ({ type }) => type.endsWith('/fulfilled'),
        (state, { payload }) => {
          state.data = payload
          state.isLoading = false
        }
      )
      .addMatcher<ReturnType<GenericAsyncThunk['rejected']>>(
        ({ type }) => type.endsWith('/rejected'),
        (state, { error }) => {
          state.error = error as SerializedError
          state.isLoading = false
        }
      )
  },
  name: moduleName,
  reducers: {}
})

export default moviesSlice.reducer