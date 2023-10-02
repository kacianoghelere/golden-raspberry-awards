import React from 'react'

import { render } from '~/@tests'
import LoadingIndicator from './LoadingIndicator'

const renderComponent = () => render(<LoadingIndicator />)

describe('LoadingIndicator component', () => {
  it('renders correctly', () => {
    const component = renderComponent().toJSON()

    expect(component).toBeTruthy()
  })
})