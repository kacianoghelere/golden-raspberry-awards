import React from 'react'

import { render } from '~/@tests'
import { mockHooksConfig } from '~/@tests/mockers/hooks'
import MoviesScreen from './MoviesScreen'

jest.mock('~/utils/hooks', () => mockHooksConfig())

const renderComponent = () => render(<MoviesScreen />)

describe('MoviesScreen component', () => {
  it('renders correctly', () => {
    const component = renderComponent().toJSON()

    expect(component).toBeTruthy()
  })
})