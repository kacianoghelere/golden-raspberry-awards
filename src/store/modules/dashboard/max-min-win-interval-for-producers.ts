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

const { reducer } = createSlice({
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.data = payload
        state.isLoading = false
      })
      .addCase(fetchData.rejected, (state, { error }) => {
        state.error = error as SerializedError
        state.isLoading = false
      })
  },
  name: moduleName,
  reducers: {}
})

export default reducer