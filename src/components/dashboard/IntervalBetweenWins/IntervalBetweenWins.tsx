import React, { useLayoutEffect } from 'react'

import * as IntervalBetweenWinsModule from '~/store/modules/dashboard/max-min-win-interval-for-producers'
import { useDispatch, useSelector } from '~/utils/hooks'
import { Error, Loading } from '~/components/commons'
import DashboardWidget from '../DashboardWidget/DashboardWidget'
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
    <DashboardWidget
      title="Producers with longest ands shortest interval between wins"
    >
      <WinIntervalInfo
        title="Maximum"
        intervalInfo={data.max[0]}
      />
      <WinIntervalInfo
        title="Minimum"
        intervalInfo={data.min[0]}
      />
    </DashboardWidget>
  )
}

export default IntervalBetweenWins