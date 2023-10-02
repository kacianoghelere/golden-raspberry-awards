import React from 'react'

import { render } from '~/@tests'
import { generateYearsWithMultipleWinners } from '~/@tests/generators'
import { mockHooksConfig } from '~/@tests/mockers/hooks'
import YearsWithMultipleWinnersList, { Props } from './YearsWithMultipleWinnersList'
import { YearsWithMultipleWinnersListItem } from './YearsWithMultipleWinnersListItem/YearsWithMultipleWinnersListItem'

jest.mock('~/utils/hooks', () => mockHooksConfig())

const mockedYearsWithMultipleWinners = generateYearsWithMultipleWinners(2)

const renderComponent = ({
  yearsWithMultipleWinners = mockedYearsWithMultipleWinners
}: Partial<Props> = {}) => render(
  <YearsWithMultipleWinnersList
    yearsWithMultipleWinners={yearsWithMultipleWinners}
  />
)

describe('YearsWithMultipleWinnersList', () => {
  it('renders without crashing', () => {
    const instance = renderComponent().toJSON()

    expect(instance).toBeTruthy()
  })

  it('renders data correctly', () => {
    const instance = renderComponent().root

    const listItemComponents = instance.findAllByType(
      YearsWithMultipleWinnersListItem
    )

    expect(listItemComponents).toHaveLength(
      mockedYearsWithMultipleWinners.length
    )
  })
})