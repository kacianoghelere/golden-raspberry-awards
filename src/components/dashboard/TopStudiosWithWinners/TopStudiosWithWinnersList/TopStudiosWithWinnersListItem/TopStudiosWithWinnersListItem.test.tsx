import React from 'react'

import { render } from '~/@tests'
import TopStudiosWithWinnersListItem, { Props } from './TopStudiosWithWinnersListItem'

const mockedStudioWithWinCount = {
  name: 'Studio 1',
  winCount: 10
}

const renderComponent = ({
  studioWithWinCount = mockedStudioWithWinCount
}: Partial<Props> = {}) => render(
  <TopStudiosWithWinnersListItem {...{
    studioWithWinCount
  }} />
)

describe('TopStudiosWithWinnersListItem', () => {
  it('renders without crashing', () => {
    const instance = renderComponent().toJSON()

    expect(instance).toBeTruthy()
  })


  it('renders studio data correctly', () => {
    const instance = renderComponent().root

    const studioNameTest = instance.findByProps({ testID: 'studio-name' })

    expect(studioNameTest.props.children).toBe('Studio 1')

    const studioWinCount = instance.findByProps({ testID: 'studio-win-count' })

    expect(studioWinCount.props.children).toBe(10)
  })
})
