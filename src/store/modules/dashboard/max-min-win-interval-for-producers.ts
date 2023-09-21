import { SerializedError, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { MaxMinWinIntervalForProducers } from '~/@types/dashboard'
import { MaxMinWinIntervalForProducersState } from '~/@types/store/modules/dashboard'
import { getMaxMinWinIntervalForProducers } from '~/utils/services/dashboard-service'

const initialState: MaxMinWinIntervalForProducersState = {
  data: undefined,
  error: undefined,
  isLoading: false
}

const moduleName = 'dashboard/max-min-win-interval-for-producers'

const fetchData = createAsyncThunk<MaxMinWinIntervalForProducers>(
  `${moduleName}/fetch`,
  async () => {
    const response = await getMaxMinWinIntervalForProducers()

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