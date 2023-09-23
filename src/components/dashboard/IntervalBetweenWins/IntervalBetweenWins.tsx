import * as GS from '@gluestack-ui/themed'
import React, { useLayoutEffect } from 'react'

import * as IntervalBetweenWinsModule from '~/store/modules/dashboard/max-min-win-interval-for-producers'
import { useDispatch, useSelector } from '~/utils/hooks'
import { Error, Loading } from '~/components/commons'
import WinIntervalInfo from './WinIntervalInfo/WinIntervalInfo'

const IntervalBetweenWins: React.FC = () => {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(IntervalBetweenWinsModule.AsyncActions.fetchData())
  }, [])

  const { data, error, isLoading } = useSelector(({ dashboard }) => (
    dashboard.maxMinWinIntervalForProducers
  ))

  if (isLoading) return (
    <Loading />
  )

  if (error || !data) return (
    <Error />
  )

  return (
    <GS.Box
      borderColor="trueGray300"
      borderWidth="$1"
      mb="$3"
      p="$4"
    >
      <GS.Text
        fontSize="$xl"
        fontWeight="$bold"
      >
        Producers with longest ands shortest interval between wins
      </GS.Text>
      <WinIntervalInfo
        title="Maximum"
        intervalInfo={data.max[0]}
      />
      <WinIntervalInfo
        title="Minimum"
        intervalInfo={data.min[0]}
      />
    </GS.Box>
  )
}

export default IntervalBetweenWins