import * as GS from '@gluestack-ui/themed'
import React from 'react'

import { YearWithMultipleWinners } from '~/@types/dashboard'

export interface Props {
  yearWithMultipleWinners: YearWithMultipleWinners
}

const YearsWithMultipleWinnersListItem: React.FC<Props> = ({
  yearWithMultipleWinners
}) => (
  <GS.HStack
    borderTopColor="$trueGray300"
    borderTopWidth="$1"
    justifyContent='space-between'
    padding="$3"
    space='md'
  >
    <GS.Text testID="year-with-multiple-winners">
      {yearWithMultipleWinners.year}
    </GS.Text>
    <GS.Text testID="winner-count">
      {yearWithMultipleWinners.winnerCount}
    </GS.Text>
  </GS.HStack>
)

export { YearsWithMultipleWinnersListItem }

export default React.memo(YearsWithMultipleWinnersListItem)