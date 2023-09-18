import React from 'react'
import renderer from 'react-test-renderer'

import Loading from './Loading'

describe('Loading', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(<Loading />).toJSON()

    expect(instance).toBeTruthy()
  })
})