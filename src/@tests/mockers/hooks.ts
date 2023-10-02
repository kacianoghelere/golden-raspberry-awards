const baseHooksConfig = {
  useDispatch: () => jest.fn,
  useDebounce: () => jest.fn,
  useSelector: jest.fn(() => ({}))
}

type HooksConfig = typeof baseHooksConfig

export const mockHooksConfig = (hooksConfig: Partial<HooksConfig> = {}) => ({
  ...baseHooksConfig,
  ...hooksConfig
})