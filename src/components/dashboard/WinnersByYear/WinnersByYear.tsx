import React from 'react'

import * as WinnersByYearModule from '~/store/modules/dashboard/winner-movies-by-year'
import { useDispatch, useSelector } from '~/utils/hooks'
import { ErrorIndicator, LoadingIndicator } from '~/components/commons'
import DashboardWidget from '../DashboardWidget/DashboardWidget'
import WinnersByYearList from './WinnersByYearList/WinnersByYearList'

const WinnersByYear: React.FC = () => {
  const dispatch = useDispatch()

  const onSearch = (year: string) => {
    dispatch(WinnersByYearModule.AsyncActions.fetchData({ year: Number(year) }))
  }

  const { data, error, isLoading } = useSelector(({ dashboard }) => (
    dashboard.winnerMoviesByYear
  ))

  return (
    <DashboardWidget title="List Movie Winners by year">
      {isLoading ? (
        <LoadingIndicator />
      ) : error ? (
        <ErrorIndicator />
      ) : (
        <WinnersByYearList
          movies={data!}
          onSearch={onSearch}
        />
      )}
    </DashboardWidget>
  )
}

export default WinnersByYear