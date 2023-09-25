import React from 'react'

import * as WinnersByYearModule from '~/store/modules/dashboard/winner-movies-by-year'
import { useDispatch, useSelector } from '~/utils/hooks'
import { Error, Loading } from '~/components/commons'
import DashboardWidget from '../DashboardWidget/DashboardWidget'
import WinnersByYearList from './WinnersByYearList/WinnersByYearList'

const WinnersByYear: React.FC = () => {
  const dispatch = useDispatch()

  const onSearch = (year: string) => {
    dispatch(WinnersByYearModule.AsyncActions.fetchData({ year: Number(year) }))
  }

  const { error, isLoading } = useSelector(({ dashboard }) => (
    dashboard.winnerMoviesByYear
  ))

  const movies = useSelector(({
    dashboard: { winnerMoviesByYear }
  }) => (
    winnerMoviesByYear.data
  ))

  return (
    <DashboardWidget title="List Movie Winners by year">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <WinnersByYearList
          movies={movies!}
          onSearch={onSearch}
        />
      )}
    </DashboardWidget>
  )
}

export default WinnersByYear