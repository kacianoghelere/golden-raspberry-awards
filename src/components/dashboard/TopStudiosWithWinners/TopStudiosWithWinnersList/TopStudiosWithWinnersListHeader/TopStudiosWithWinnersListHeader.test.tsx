import React from 'react'

import { render } from '~/@tests'
import TopStudiosWithWinnersListHeader from './TopStudiosWithWinnersListHeader'

const renderComponent = () => render(<TopStudiosWithWinnersListHeader />)

describe('TopStudiosWithWinnersListHeader', () => {
  it('renders without crashing', () => {
    const instance = renderComponent().toJSON()

    expect(instance).toBeTruthy()
  })
})