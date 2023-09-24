import React, { useLayoutEffect, useMemo } from 'react'

import * as StudiosWithWinCountModule from '~/store/modules/dashboard/studios-with-win-count'
import { useDispatch, useSelector } from '~/utils/hooks'
import { Error, Loading } from '~/components/commons'
import DashboardWidget from '../DashboardWidget/DashboardWidget'
import TopStudiosWithWinnersList from './TopStudiosWithWinnersList/TopStudiosWithWinnersList'

export interface Props {
  limit: number
}

const TopStudiosWithWinners: React.FC<Props> = ({ limit = 3 }) => {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(StudiosWithWinCountModule.AsyncActions.fetchData())
  }, [])

  const { error, isLoading } = useSelector(({ dashboard }) => (
    dashboard.studiosWithWinCount
  ))

  const studios = useSelector(({ dashboard: { studiosWithWinCount } }) => (
    studiosWithWinCount.data?.studios?.slice(0, limit) || []
  ))

  const hasError = useMemo<boolean>(() => (
    !!(error || !studios.length)
  ), [error, studios.length])

  return (
    <DashboardWidget title={`Top ${limit} Studios With Winners`}>
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <Error />
      ) : (
        <TopStudiosWithWinnersList studiosWithWinCount={studios} />
      )}
    </DashboardWidget>
  )
}

export default TopStudiosWithWinners