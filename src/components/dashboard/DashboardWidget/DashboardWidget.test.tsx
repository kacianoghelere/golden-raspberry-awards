import React from 'react'

import { render } from '~/@tests'
import DashboardWidget, { Props } from './DashboardWidget'

const renderComponent = ({
  onMount = jest.fn(),
  title = 'Widget'
}: Partial<Props> = {}) => render(
  <DashboardWidget {...{
    onMount,
    title
  }} />
)

describe('DashboardWidget', () => {
  it('renders without crashing', () => {
    const instance = renderComponent().toJSON()

    expect(instance).toBeTruthy()
  })
})