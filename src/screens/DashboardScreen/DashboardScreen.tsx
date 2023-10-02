import * as GS from '@gluestack-ui/themed'
import React from 'react'
import { ScrollView } from 'react-native'

import {
  IntervalBetweenWins,
  TopStudiosWithWinners,
  WinnersByYear,
  YearsWithMultipleWinners
} from '~/components/dashboard'

const DashboardScreen: React.FC = () => (
  <ScrollView>
    <GS.Box padding="$3">
      <YearsWithMultipleWinners />
      <TopStudiosWithWinners />
      <IntervalBetweenWins />
      <WinnersByYear />
    </GS.Box>
  </ScrollView>
)

export default DashboardScreen