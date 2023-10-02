import React from 'react'

import { render } from '~/@tests'
import { generateYearWithMultipleWinners } from '~/@tests/generators'
import YearsWithMultipleWinnersListItem, { Props } from './YearsWithMultipleWinnersListItem'

const mockedYearWithMultipleWinners = generateYearWithMultipleWinners(1981)

const renderComponent = ({
  yearWithMultipleWinners = mockedYearWithMultipleWinners
}: Partial<Props> = {}) => render(
  <YearsWithMultipleWinnersListItem {...{ yearWithMultipleWinners }} />
)

describe('YearsWithMultipleWinnersListItem', () => {
  it('renders without crashing', () => {
    const instance = renderComponent().toJSON()

    expect(instance).toBeTruthy()
  })

  it('renders data correctly', () => {
    const instance = renderComponent().root

    const yearWithMultipleWinners = instance.findByProps({
      testID: 'year-with-multiple-winners'
    })

    expect(yearWithMultipleWinners.props.children).toBe(
      mockedYearWithMultipleWinners.year
    )

    const winnerCount = instance.findByProps({ testID: 'winner-count' })

    expect(winnerCount.props.children).toBe(
      mockedYearWithMultipleWinners.winnerCount
    )
  })
})