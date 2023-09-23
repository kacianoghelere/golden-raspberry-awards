import React from 'react'
import renderer from 'react-test-renderer'

import { generateYearWithMultipleWinners } from '~/@tests/generators'
import YearsWithMultipleWinnersListItem from './YearsWithMultipleWinnersListItem'

const mockedYearWithMultipleWinners = generateYearWithMultipleWinners(1981)

const mockComponent = () => (
  <YearsWithMultipleWinnersListItem
    yearWithMultipleWinners={mockedYearWithMultipleWinners}
  />
)

describe('YearsWithMultipleWinnersListItem', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(mockComponent()).toJSON()

    expect(instance).toBeTruthy()
  })
})