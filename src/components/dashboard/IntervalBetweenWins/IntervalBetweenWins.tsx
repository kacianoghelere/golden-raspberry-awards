import React from 'react'

import * as IntervalBetweenWinsModule from '~/store/modules/dashboard/max-min-win-interval-for-producers'
import { useDispatch, useSelector } from '~/utils/hooks'
import { ErrorIndicator, LoadingIndicator } from '~/components/commons'
import DashboardWidget from '../DashboardWidget/DashboardWidget'
import WinIntervalInfo from './WinIntervalInfo/WinIntervalInfo'

const IntervalBetweenWins: React.FC = () => {
  const dispatch = useDispatch()

  const onMount = () => {
    dispatch(IntervalBetweenWinsModule.AsyncActions.fetchData())
  }

  const { data, error, isLoading } = useSelector(({ dashboard }) => (
    dashboard.maxMinWinIntervalForProducers
  ))

  return (
    <DashboardWidget
      onMount={onMount}
      title="Producers with longest ands shortest interval between wins"
    >
      {isLoading ? (
        <LoadingIndicator />
      ) : error ? (
        <ErrorIndicator />
      ) : data ? (
        <>
          <WinIntervalInfo
            intervalInfo={data.max[0]}
            testID="max-win-interval-info"
            title="Maximum"
          />
          <WinIntervalInfo
            intervalInfo={data.min[0]}
            testID="min-win-interval-info"
            title="Minimum"
          />
        </>
      ) : null}
    </DashboardWidget>
  )
}

export default IntervalBetweenWins