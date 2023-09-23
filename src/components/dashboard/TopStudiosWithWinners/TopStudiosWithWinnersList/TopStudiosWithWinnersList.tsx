/* eslint-disable import/order */
import * as GS from '@gluestack-ui/themed'
import React from 'react'

import { StudioWithWinCount } from '~/@types/dashboard'
import TopStudiosWithWinnersListHeader from './TopStudiosWithWinnersListHeader/TopStudiosWithWinnersListHeader'
import TopStudiosWithWinnersListItem from './TopStudiosWithWinnersListItem/TopStudiosWithWinnersListItem'

export interface Props {
  studiosWithWinCount: StudioWithWinCount[]
}

const TopStudiosWithWinnersList: React.FC<Props> = ({
  studiosWithWinCount
}) => (
  <GS.Box
    borderBottomColor="$blueGray100"
    borderBottomWidth="$1"
    padding="$0"
  >
    <TopStudiosWithWinnersListHeader />
    {studiosWithWinCount.map((item, index) => (
      <TopStudiosWithWinnersListItem
        key={`winner-studio-${item.name}-${index}`}
        studioWithWinCount={item}
      />
    ), [])}
  </GS.Box>
)

export default TopStudiosWithWinnersList