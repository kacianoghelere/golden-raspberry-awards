import React, { useLayoutEffect } from 'react'

import * as StudiosWithWinCountModule from '~/store/modules/dashboard/studios-with-win-count'
import { useDispatch, useSelector } from '~/utils/hooks'
import { Error, Loading } from '~/components/commons'
import DashboardWidget from '../DashboardWidget/DashboardWidget'
import TopStudiosWithWinnersList from './TopStudiosWithWinnersList/TopStudiosWithWinnersList'

export interface Props {
  limit?: number
}

const TopStudiosWithWinners: React.FC<Props> = ({ limit = 3 }) => {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(StudiosWithWinCountModule.AsyncActions.fetchData())
  }, [])

  const { data, error, isLoading } = useSelector(({ dashboard }) => (
    dashboard.studiosWithWinCount
  ))

  const hasError: boolean = !!(error || !data?.studios)

  return (
    <DashboardWidget
      title={`Top ${limit} Studios With Winners`}
    >
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <Error />
      ) : (
        <TopStudiosWithWinnersList
          studiosWithWinCount={data!.studios.slice(0, limit)}
        />
      )}
    </DashboardWidget>
  )
}

export default TopStudiosWithWinners