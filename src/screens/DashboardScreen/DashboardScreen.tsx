import * as GS from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { ScrollView } from 'react-native'

import {
  IntervalBetweenWins,
  TopStudiosWithWinners,
  WinnersByYear,
  YearsWithMultipleWinners
} from '~/components/dashboard'

const DashboardScreen: React.FC = () => {
  const { setOptions } = useNavigation()

  useLayoutEffect(() => {
    setOptions({})
  }, [])

  return (
    <ScrollView>
      <GS.Box padding="$3">
        <YearsWithMultipleWinners />
        <TopStudiosWithWinners />
        <IntervalBetweenWins />
        <WinnersByYear />
      </GS.Box>
    </ScrollView>
  )
}

export default DashboardScreen