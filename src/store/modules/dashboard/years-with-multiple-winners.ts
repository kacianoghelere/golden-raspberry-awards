import {
  SerializedError,
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'

import { YearsWithMultipleWinners } from '~/@types/dashboard'
import { YearsWithMultipleWinnersState } from '~/@types/store/modules/dashboard'
import { getYearsWithMultipleWinners } from '~/utils/services/dashboard-service'

const initialState: YearsWithMultipleWinnersState = {
  data: undefined,
  error: undefined,
  isLoading: false
}

const moduleName = 'dashboard/years-with-multiple-winners'

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