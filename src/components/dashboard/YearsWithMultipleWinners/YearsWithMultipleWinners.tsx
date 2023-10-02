import React from 'react'

import * as YearsWithMultipleWinnersModule from '~/store/modules/dashboard/years-with-multiple-winners'
import { useDispatch, useSelector, useSlicedList } from '~/utils/hooks'
import { ErrorIndicator, LoadingIndicator } from '~/components/commons'
import DashboardWidget from '../DashboardWidget/DashboardWidget'
import YearsWithMultipleWinnersList from './YearsWithMultipleWinnersList/YearsWithMultipleWinnersList'

export interface Props {
  limit?: number
}

const YearsWithMultipleWinners: React.FC<Props> = ({
  limit = 3
}) => {
  const dispatch = useDispatch()

  const onMount = () => {
    dispatch(YearsWithMultipleWinnersModule.AsyncActions.fetchData())
  }

  const { data, error, isLoading } = useSelector(({ dashboard }) => (
    dashboard.yearsWithMultipleWinners
  ))

  const yearsWithMultipleWinners = useSlicedList(data?.years ?? [], limit)

  return (
    <DashboardWidget
      onMount={onMount}
      title="List Years With Multiple Winners"
    >
      {isLoading ? (
        <LoadingIndicator />
      ) : error ? (
        <ErrorIndicator />
      ) : yearsWithMultipleWinners ? (
        <YearsWithMultipleWinnersList
          yearsWithMultipleWinners={yearsWithMultipleWinners}
        />
      ) : null}
    </DashboardWidget>
  )
}

export default YearsWithMultipleWinners