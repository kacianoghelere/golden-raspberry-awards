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
    borderBottomColor="$coolGray100"
    borderBottomWidth="$1"
    justifyContent='space-between'
    padding="$3"
    space='md'
  >
    <Text fontWeight='$bold'>{yearWithMultipleWinners.year}</Text>
    <Text fontWeight='$bold'>{yearWithMultipleWinners.winnerCount}</Text>
  </HStack>
)

export { YearsWithMultipleWinnersListItem }

export default React.memo(YearsWithMultipleWinnersListItem)