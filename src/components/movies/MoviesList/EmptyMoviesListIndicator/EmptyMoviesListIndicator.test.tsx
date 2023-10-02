import React from 'react'

import { render } from '~/@tests'
import EmptyMoviesListIndicator from './EmptyMoviesListIndicator'

describe('EmptyMoviesListIndicator', () => {
  it('renders without crashing', () => {
    const instance = render(<EmptyMoviesListIndicator />).toJSON()

    expect(instance).toBeTruthy()
  })
})