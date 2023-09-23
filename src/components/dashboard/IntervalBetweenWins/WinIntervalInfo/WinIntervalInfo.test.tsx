import React from 'react'
import renderer from 'react-test-renderer'

import WinIntervalInfo, { Props } from './WinIntervalInfo'

const mockComponent = ({
  intervalInfo = {
    followingWin: 2015,
    interval: 4,
    previousWin: 2011,
    producer: 'Test'
  },
  title = 'Maximum'
}: Partial<Props> = {}) => (
  <WinIntervalInfo {...{
    intervalInfo,
    title
  }} />
)

describe('WinIntervalInfo', () => {
  it('renders without crashing', () => {
    const instance = renderer.create(mockComponent()).toJSON()

    expect(instance).toBeTruthy()
  })
})