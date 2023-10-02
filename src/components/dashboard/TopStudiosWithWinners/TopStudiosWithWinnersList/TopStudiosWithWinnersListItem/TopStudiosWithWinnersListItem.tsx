import * as GS from '@gluestack-ui/themed'
import React from 'react'

import { StudioWithWinCount } from '~/@types/dashboard'

export interface Props {
  studioWithWinCount: StudioWithWinCount
}

const TopStudiosWithWinnersListItem: React.FC<Props> = ({
  studioWithWinCount
}) => (
  <GS.HStack
    borderTopColor="$trueGray300"
    borderTopWidth="$1"
    justifyContent='space-between'
    padding="$3"
    space='md'
  >
    <GS.Text testID="studio-name">{studioWithWinCount.name}</GS.Text>
    <GS.Text testID="studio-win-count">{studioWithWinCount.winCount}</GS.Text>
  </GS.HStack>
)

export { TopStudiosWithWinnersListItem }

export default React.memo(TopStudiosWithWinnersListItem)