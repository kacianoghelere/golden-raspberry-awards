import { HStack, Text } from '@gluestack-ui/themed'
import React from 'react'

import { YearWithMultipleWinners } from '~/@types/dashboard'

export interface Props {
  yearWithMultipleWinners: YearWithMultipleWinners
}

const YearsWithMultipleWinnersListItem: React.FC<Props> = ({
  yearWithMultipleWinners
}) => (
  <HStack
    borderTopColor="$trueGray300"
    borderTopWidth="$1"
    justifyContent='space-between'
    padding="$3"
    space='md'
  >
    <Text>{yearWithMultipleWinners.year}</Text>
    <Text>{yearWithMultipleWinners.winnerCount}</Text>
  </HStack>
)

export { YearsWithMultipleWinnersListItem }

export default React.memo(YearsWithMultipleWinnersListItem)