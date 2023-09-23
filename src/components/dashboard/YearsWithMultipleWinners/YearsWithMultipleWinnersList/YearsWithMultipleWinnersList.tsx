/* eslint-disable import/order */
import * as GS from '@gluestack-ui/themed'
import React from 'react'

import { YearWithMultipleWinners } from '~/@types/dashboard'
import YearsWithMultipleWinnersListHeader from './YearsWithMultipleWinnersListHeader/YearsWithMultipleWinnersListHeader'
import YearsWithMultipleWinnersListItem from './YearsWithMultipleWinnersListItem/YearsWithMultipleWinnersListItem'

export interface Props {
  yearsWithMultipleWinners: YearWithMultipleWinners[]
}

const YearsWithMultipleWinnersList: React.FC<Props> = ({
  yearsWithMultipleWinners
}) => (
  <GS.Box
    borderBottomColor="$blueGray100"
    borderBottomWidth="$1"
    padding="$0"
  >
    <YearsWithMultipleWinnersListHeader />
    {yearsWithMultipleWinners.map((item, index) => (
      <YearsWithMultipleWinnersListItem
        key={`item-${item.year}-${index}`}
        yearWithMultipleWinners={item}
      />
    ), [])}
  </GS.Box>
)

export default YearsWithMultipleWinnersList