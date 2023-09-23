import { HStack, Text } from '@gluestack-ui/themed'
import React from 'react'

import { StudioWithWinCount } from '~/@types/dashboard'

export interface Props {
  studioWithWinCount: StudioWithWinCount
}

const TopStudiosWithWinnersListItem: React.FC<Props> = ({
  studioWithWinCount
}) => (
  <HStack
    borderTopColor="$trueGray300"
    borderTopWidth="$1"
    justifyContent='space-between'
    padding="$3"
    space='md'
  >
    <Text>{studioWithWinCount.name}</Text>
    <Text>{studioWithWinCount.winCount}</Text>
  </HStack>
)

export { TopStudiosWithWinnersListItem }

export default React.memo(TopStudiosWithWinnersListItem)