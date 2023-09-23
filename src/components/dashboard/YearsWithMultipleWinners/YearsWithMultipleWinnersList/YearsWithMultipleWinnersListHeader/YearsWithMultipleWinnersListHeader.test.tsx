import React from 'react'
import renderer from 'react-test-renderer'

import YearsWithMultipleWinnersListHeader from './YearsWithMultipleWinnersListHeader'

const mockComponent = () => <YearsWithMultipleWinnersListHeader />

describe('YearsWithMultipleWinnersListHeader', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(mockComponent()).toJSON()

    expect(instance).toBeTruthy()
  })
})