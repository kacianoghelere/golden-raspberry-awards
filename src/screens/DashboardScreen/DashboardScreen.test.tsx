import React from 'react'
import renderer from 'react-test-renderer'

import DashboardScreen from './DashboardScreen'

describe('DashboardScreen', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(<DashboardScreen />).toJSON()

    expect(instance).toBeTruthy()
  })
})