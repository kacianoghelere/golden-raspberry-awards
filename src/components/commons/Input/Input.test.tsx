import React from 'react'
import renderer from 'react-test-renderer'

import Input, { Props } from './Input'

const mockComponent = ({
  onChangeText = jest.fn(),
  value = ''
}: Partial<Props> = {}) => (
  <Input {...{
    onChangeText,
    value
  }} />
)

describe('Input', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(mockComponent()).toJSON()

    expect(instance).toBeTruthy()
  })
})