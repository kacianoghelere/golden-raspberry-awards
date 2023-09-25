import React from 'react'
import renderer from 'react-test-renderer'

import WinnersByYearListHeader from './WinnersByYearListHeader'

const mockComponent = () => <WinnersByYearListHeader />

describe('WinnersByYearListHeader', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(mockComponent()).toJSON()

    expect(instance).toBeTruthy()
  })
})