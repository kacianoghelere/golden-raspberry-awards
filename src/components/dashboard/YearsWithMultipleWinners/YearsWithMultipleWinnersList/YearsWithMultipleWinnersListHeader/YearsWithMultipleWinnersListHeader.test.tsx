import React from 'react'

import { render } from '~/@tests'
import YearsWithMultipleWinnersListHeader from './YearsWithMultipleWinnersListHeader'

const renderComponent = () => render(<YearsWithMultipleWinnersListHeader />)

describe('YearsWithMultipleWinnersListHeader', () => {
  it('renders without crashing', () => {
    const instance = renderComponent().toJSON()

    expect(instance).toBeTruthy()
  })
})