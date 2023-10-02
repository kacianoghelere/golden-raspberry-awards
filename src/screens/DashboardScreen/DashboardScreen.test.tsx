import React from 'react'

import { render } from '~/@tests'
import { mockHooksConfig } from '~/@tests/mockers/hooks'
import DashboardScreen from './DashboardScreen'

jest.mock('~/utils/hooks', () => mockHooksConfig())

const renderComponent = () => render(<DashboardScreen />)

describe('DashboardScreen component', () => {
  it('renders correctly', () => {
    const component = renderComponent().toJSON()

    expect(component).toBeTruthy()
  })
})