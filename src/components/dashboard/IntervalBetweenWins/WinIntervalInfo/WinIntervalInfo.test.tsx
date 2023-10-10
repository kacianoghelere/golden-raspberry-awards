import React from 'react'

import { render } from '~/@tests'
import WinIntervalInfo, { Props } from './WinIntervalInfo'

const mockedIntervalInfo: Props['intervalInfo'] = {
  followingWin: 2015,
  interval: 4,
  previousWin: 2011,
  producer: 'Test'
}

const renderComponent = ({
  intervalInfo = mockedIntervalInfo,
  title = 'Maximum'
}: Partial<Props> = {}) => render(
  <WinIntervalInfo {...{
    intervalInfo,
    title
  }} />
)

describe('WinIntervalInfo component', () => {
  it('renders without crashing', () => {
    const instance = renderComponent().toJSON()

    expect(instance).toBeTruthy()
  })

  it.each([
    'Maximum',
    'Minimum'
  ])('renders WinIntervalInfo component correctly with "%s" title', (title) => {
    const testInstance = renderComponent({
      title: title as Props['title']
    }).root

    const titleText = testInstance.findByProps({ testID: 'interval-title' })

    expect(titleText.props.children).toEqual(title)

    const producerNameText = testInstance.findByProps({ testID: 'producer-name' })

    expect(producerNameText.props.children).toEqual(mockedIntervalInfo.producer)

    const winIntervalText = testInstance.findByProps({ testID: 'win-interval' })

    const mockedIntervalLabel = mockedIntervalInfo.interval === 1
      ? '1 year'
      : `${mockedIntervalInfo.interval} years`

    expect(winIntervalText.props.children).toEqual(
      `${mockedIntervalLabel} (${mockedIntervalInfo.previousWin}~${mockedIntervalInfo.followingWin})`
    )
  })
})