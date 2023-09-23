import React from 'react'
import renderer from 'react-test-renderer'

import DashboardWidget, { Props } from './DashboardWidget'

const mockComponent = ({
  onMount = jest.fn(),
  title = 'Widget'
}: Partial<Props> = {}) => (
  <DashboardWidget {...{
    onMount,
    title
  }} />
)

describe('DashboardWidget', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(mockComponent()).toJSON()

    expect(instance).toBeTruthy()
  })
})