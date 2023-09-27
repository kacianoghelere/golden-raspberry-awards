import React from 'react'

import * as StudiosWithWinCountModule from '~/store/modules/dashboard/studios-with-win-count'
import { useDispatch, useSelector, useSlicedList } from '~/utils/hooks'
import { Error, Loading } from '~/components/commons'
import DashboardWidget from '../DashboardWidget/DashboardWidget'
import TopStudiosWithWinnersList from './TopStudiosWithWinnersList/TopStudiosWithWinnersList'

export interface Props {
  limit?: number
}

const TopStudiosWithWinners: React.FC<Props> = ({ limit = 3 }) => {
  const dispatch = useDispatch()

  const onMount = () => {
    dispatch(StudiosWithWinCountModule.AsyncActions.fetchData())
  }

  const { data, error, isLoading } = useSelector(({ dashboard }) => (
    dashboard.studiosWithWinCount
  ))

  const topStudios = useSlicedList(data?.studios, limit)

  return (
    <DashboardWidget
      onMount={onMount}
      title={`Top ${limit} Studios With Winners`}
    >
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : data ? (
        <TopStudiosWithWinnersList studiosWithWinCount={topStudios} />
      ) : null}
    </DashboardWidget>
  )
}

export default TopStudiosWithWinners