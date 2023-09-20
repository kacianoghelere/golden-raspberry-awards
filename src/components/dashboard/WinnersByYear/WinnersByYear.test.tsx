import React from 'react'
import renderer from 'react-test-renderer'

import WinnersByYear from './WinnersByYear'

describe('WinnersByYear', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(<WinnersByYear />).toJSON()

    expect(instance).toBeTruthy()
  })
})