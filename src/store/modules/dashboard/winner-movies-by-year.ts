import {
  createAsyncThunk,
  createSlice,
  SerializedError
} from '@reduxjs/toolkit'

import { Movie } from '~/@types/movies'
import { WinnerMoviesByYearState } from '~/@types/store/modules/dashboard'
import {
  getWinnerMoviesByYear,
  GetWinnerMoviesByYearParams
} from '~/utils/services/dashboard-service'

const initialState: WinnerMoviesByYearState = {
  data: undefined,
  error: undefined,
  isLoading: false
}

const moduleName = 'dashboard/winner-movies-by-year'

const fetchData = createAsyncThunk<Movie[], GetWinnerMoviesByYearParams>(
  `${moduleName}/fetch`,
  async (params) => {
    const response = await getWinnerMoviesByYear(params)

    return response.data
  }
)

export const AsyncActions = {
  fetchData
}

type GenericAsyncThunk = typeof fetchData

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