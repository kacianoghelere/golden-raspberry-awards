export const buildPropReducer = <T, K extends keyof T>(INITIAL_STATE: T) => (
  (propName: K) => (
    (
      state = INITIAL_STATE,
      action: any
    ) => ({
      ...state,
      [propName]: action[propName]
    })
  )
)