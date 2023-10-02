import React from 'react'

import { render } from '~/@tests'
import ErrorIndicator from './ErrorIndicator'

const renderComponent = () => render(<ErrorIndicator />)

describe('ErrorIndicator component', () => {
  it('renders correctly', () => {
    const component = renderComponent().toJSON()

    expect(component).toBeTruthy()
  })
})