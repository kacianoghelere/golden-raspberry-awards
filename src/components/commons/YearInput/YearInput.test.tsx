import React from 'react'
import renderer from 'react-test-renderer'

import YearInput, { YearInputProps } from './YearInput'

const mockComponent = ({
  onChangeText = jest.fn(),
  value = ''
}: Partial<YearInputProps> = {}) => (
  <YearInput {...{
    onChangeText,
    value
  }} />
)

describe('YearInput', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(mockComponent()).toJSON()

    expect(instance).toBeTruthy()
  })
})