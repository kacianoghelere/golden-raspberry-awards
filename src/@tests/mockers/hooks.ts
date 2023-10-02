import useSlicedList from '~/utils/hooks/use-sliced-list'

const baseHooksConfig = {
  useDispatch: () => jest.fn(),
  useDebounce: () => jest.fn((callback) => callback()),
  useSelector: jest.fn(() => ({})),
  useSlicedList
}

type HooksConfig = typeof baseHooksConfig

export const mockHooksConfig = (hooksConfig: Partial<HooksConfig> = {}) => ({
  ...baseHooksConfig,
  ...hooksConfig
})