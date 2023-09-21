import {
  MaxMinWinIntervalForProducers,
  StudiosWithWinCount,
  YearsWithMultipleWinners
} from '~/@types/dashboard'
import { Movie } from '~/@types/movies'
import { getApiData } from '~/utils/services/http-service'

type Projection =
  | 'max-min-win-interval-for-producers'
  | 'studios-with-win-count'
  | 'years-with-multiple-winners'

type ProjectionResponse = {
  'max-min-win-interval-for-producers': MaxMinWinIntervalForProducers
  'studios-with-win-count': StudiosWithWinCount
  'years-with-multiple-winners': YearsWithMultipleWinners
}

const getProjection = async <TProjection extends Projection>(
  projection: TProjection
) => (
  await getApiData<ProjectionResponse[TProjection]>({ projection })
)

export const getMaxMinWinIntervalForProducers = async () => (
  await getProjection('max-min-win-interval-for-producers')
)

export interface GetWinnerMoviesByYearParams {
  year: string
}

export const getWinnerMoviesByYear = async ({
  year
}: GetWinnerMoviesByYearParams) => (
  await getApiData<Movie[]>({
    winner: 'true',
    year
  })
)

export const getStudiosWithWinCount = async () => (
  await getProjection('studios-with-win-count')
)

export const getYearsWithMultipleWinners = async () => (
  await getProjection('years-with-multiple-winners')
)
