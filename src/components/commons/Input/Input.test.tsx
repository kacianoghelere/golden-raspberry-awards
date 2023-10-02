import React from 'react'

import { render } from '~/@tests'
import Input, { Props } from './Input'

const renderComponent = ({
  onChangeText = jest.fn(),
  value = ''
}: Partial<Props> = {}) => render(
  <Input {...{
    onChangeText,
    value
  }} />
)

describe('Input', () => {
  it('renders without crashing', () => {
    const instance = renderComponent().toJSON()

    expect(instance).toBeTruthy()
  })
})