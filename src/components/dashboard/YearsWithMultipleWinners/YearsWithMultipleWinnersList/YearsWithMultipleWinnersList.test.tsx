import React from 'react'
import renderer from 'react-test-renderer'

import { generateYearsWithMultipleWinners } from '~/@tests/generators'
import YearsWithMultipleWinnersList from './YearsWithMultipleWinnersList'

const mockedYearsWithMultipleWinners = generateYearsWithMultipleWinners(2)

const mockComponent = () => (
  <YearsWithMultipleWinnersList
    yearsWithMultipleWinners={mockedYearsWithMultipleWinners}
  />
)

describe('YearsWithMultipleWinnersList', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(mockComponent()).toJSON()

    expect(instance).toBeTruthy()
  })
})