import React from 'react'

import * as IntervalBetweenWinsModule from '~/store/modules/dashboard/max-min-win-interval-for-producers'
import { useDispatch, useSelector } from '~/utils/hooks'
import { Error, Loading } from '~/components/commons'
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
        <Loading />
      ) : error ? (
        <Error />
      ) : data ? (
        <>
          <WinIntervalInfo
            title="Maximum"
            intervalInfo={data.max[0]}
          />
          <WinIntervalInfo
            title="Minimum"
            intervalInfo={data.min[0]}
          />
        </>
      ) : null}
    </DashboardWidget>
  )
}

export default IntervalBetweenWins