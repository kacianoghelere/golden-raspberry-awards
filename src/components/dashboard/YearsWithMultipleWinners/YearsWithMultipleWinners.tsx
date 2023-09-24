import React, { useLayoutEffect, useMemo } from 'react'

import * as YearsWithMultipleWinnersModule from '~/store/modules/dashboard/years-with-multiple-winners'
import { useDispatch, useSelector } from '~/utils/hooks'
import { Error, Loading } from '~/components/commons'
import DashboardWidget from '../DashboardWidget/DashboardWidget'
import YearsWithMultipleWinnersList from './YearsWithMultipleWinnersList/YearsWithMultipleWinnersList'

export interface Props {
  limit?: number
}

const YearsWithMultipleWinners: React.FC<Props> = ({
  limit = 3
}) => {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(YearsWithMultipleWinnersModule.AsyncActions.fetchData())
  }, [])

  const { error, isLoading } = useSelector(({ dashboard }) => (
    dashboard.yearsWithMultipleWinners
  ))

  const yearsWithMultipleWinners = useSelector(({
    dashboard: { yearsWithMultipleWinners }
  }) => (
    yearsWithMultipleWinners.data?.years?.slice(0, limit) || []
  ))

  const hasError = useMemo<boolean>(() => (
    !!(error || !yearsWithMultipleWinners.length)
  ), [error, yearsWithMultipleWinners.length])

  return (
    <DashboardWidget title="List Years With Multiple Winners">
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <Error />
      ) : (
        <YearsWithMultipleWinnersList
          yearsWithMultipleWinners={yearsWithMultipleWinners}
        />
      )}
    </DashboardWidget>
  )
}

export default YearsWithMultipleWinners