import React from 'react'

import { render } from '~/@tests'
import MoviesListHeader from './MoviesListHeader'

describe('MoviesListHeader', () => {
  it('renders without crashing', () => {
    const instance = render(<MoviesListHeader />).toJSON()

    expect(instance).toBeTruthy()
  })
})