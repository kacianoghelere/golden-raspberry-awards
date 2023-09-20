import * as GS from '@gluestack-ui/themed'
import React, { useLayoutEffect } from 'react'

import * as MoviesListModule from '~/store/modules/movies/list'
import { useDispatch, useSelector } from '~/utils/hooks'
import { Error } from '~/components/commons'
import {
  MoviesList,
  MoviesListFooter,
  MoviesListHeader
} from '~/components/movies'

const MoviesScreen: React.FC = () => {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(MoviesListModule.AsyncActions.fetchMovies({}))
  }, [])

  const { data, error, isLoading } = useSelector(({ movies }) => movies)

  if (error) return (
    <Error />
  )

  const handleGoToNextPage = () => {
    dispatch(MoviesListModule.AsyncActions.fetchNextPage())
  }

  const handleGoToPreviousPage = () => {
    dispatch(MoviesListModule.AsyncActions.fetchPreviousPage())
  }

  const handleSearch = (params: { onlyWinners: boolean, year: string }) => {
    dispatch(MoviesListModule.AsyncActions.fetchMovies(params))
  }

  return (
    <MoviesList
      ListEmptyComponent={<GS.Text>Empty :(</GS.Text>}
      ListFooterComponent={() => (
        <MoviesListFooter
          currentPage={data?.number}
          totalPages={data?.totalPages}
          onNextPage={handleGoToNextPage}
          onPreviousPage={handleGoToPreviousPage}
        />
      )}
      ListHeaderComponent={() => (
        <MoviesListHeader onSearch={handleSearch} />
      )}
      movies={data?.content ?? []}
      refreshing={isLoading}
    />
  )
}

export default MoviesScreen