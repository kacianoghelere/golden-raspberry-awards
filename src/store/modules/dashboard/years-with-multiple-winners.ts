import { SerializedError, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { YearsWithMultipleWinners } from '~/@types/dashboard'
import { YearsWithMultipleWinnersState } from '~/@types/store/modules/dashboard'
import { getYearsWithMultipleWinners } from '~/utils/services/dashboard-service'

const initialState: YearsWithMultipleWinnersState = {
  data: undefined,
  error: undefined,
  isLoading: false
}

const moduleName = 'dashboard/studios-with-win-count'

const fetchData = createAsyncThunk<YearsWithMultipleWinners>(
  `${moduleName}/fetch`,
  async () => {
    const response = await getYearsWithMultipleWinners()

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