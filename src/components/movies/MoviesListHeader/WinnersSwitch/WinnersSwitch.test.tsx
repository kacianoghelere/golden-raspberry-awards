import React from 'react'
import renderer from 'react-test-renderer'

import WinnersSwitch, { WinnersSwitchProps } from './WinnersSwitch'

const mockComponent = ({
  onToggle = jest.fn(),
  value = false
}: Partial<WinnersSwitchProps> = {}) => (
  <WinnersSwitch {...{
    onToggle,
    value
  }} />
)

describe('WinnersSwitch', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(mockComponent()).toJSON()

    expect(instance).toBeTruthy()
  })
})