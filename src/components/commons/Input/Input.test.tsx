import React from 'react'
import renderer from 'react-test-renderer'

import Input, { Props } from './Input'

const renderComponent = ({
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
    const instance = renderer.create(renderComponent()).toJSON()

    expect(instance).toBeTruthy()
  })
})