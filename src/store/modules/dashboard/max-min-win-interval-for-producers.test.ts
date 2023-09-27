import reducer, { AsyncActions } from './max-min-win-interval-for-producers'

describe('max-min-win-interval-for-producers slice', () => {
  describe('AsyncActions.fetchData', () => {
    it('should set isLoading to true when pending', () => {
      const state = reducer(undefined, AsyncActions.fetchData.pending())
      expect(state.isLoading).toBe(true)
    })

    it('should set data and isLoading to false when fulfilled', () => {
      const mockData = { max: 10, min: 5, interval: 2 }
      const state = reducer(undefined, AsyncActions.fetchData.fulfilled(mockData))
      expect(state.data).toEqual(mockData)
      expect(state.isLoading).toBe(false)
    })

    it('should set error and isLoading to false when rejected', () => {
      const mockError = { message: 'Something went wrong' }
      const state = reducer(undefined, AsyncActions.fetchData.rejected(mockError))
      expect(state.error).toEqual(mockError)
      expect(state.isLoading).toBe(false)
    })
  })
})