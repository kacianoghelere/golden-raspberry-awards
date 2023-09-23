import * as GS from '@gluestack-ui/themed'
import React, { useLayoutEffect } from 'react'

import * as YearsWithMultipleWinnersModule from '~/store/modules/dashboard/years-with-multiple-winners'
import { useDispatch, useSelector } from '~/utils/hooks'
import { Error, Loading } from '~/components/commons'
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

  const { data, error, isLoading } = useSelector(({ dashboard }) => (
    dashboard.yearsWithMultipleWinners
  ))

  if (isLoading) return (
    <Loading />
  )

  if (error || !data?.years) return (
    <Error />
  )

  return (
    <GS.Box
      borderWidth="$1"
      mb="$3"
      p="$4"
    >
      <GS.Text
        fontSize="$lg"
        fontWeight="$bold"
        marginBottom="$3"
      >
        List Years With Multiple Winners
      </GS.Text>
      <YearsWithMultipleWinnersList
        yearsWithMultipleWinners={data.years.slice(0, limit)}
      />
    </GS.Box>
  )
}

export default YearsWithMultipleWinners