import * as GS from '@gluestack-ui/themed'
import React, { useEffect, useMemo, useState } from 'react'

import { Movie, MovieWinStatus } from '~/@types/movies'
import * as MoviesListModule from '~/store/modules/movies/list'
import { useDebounce, useDispatch, useSelector } from '~/utils/hooks'
import { ErrorIndicator } from '~/components/commons'
import {
  MoviesList,
  MoviesListHeader
} from '~/components/movies'

const checkSearchText = (movie: Movie, searchText?: string) => {
  if (!searchText) return true

  return movie.title.toLowerCase().includes(searchText.toLowerCase())
    || `${movie.year}`.includes(searchText)
}

const checkWinnerFilter = (movie: Movie, winnerFilter: MovieWinStatus) => {
  if (winnerFilter === 'all') return true

  const winStatus = movie.winner ? 'winner' : 'not-winner'

  return winnerFilter === winStatus
}

const MoviesScreen: React.FC = () => {
  const [searchText, setSearchText] = useState<string>()

  const [winnerFilter, setWinnerFilter] = useState<MovieWinStatus>('all')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(MoviesListModule.AsyncActions.fetchMovies())
  }, [])

  const { data, error, isLoading } = useSelector(({ movies }) => movies)

  const filteredMovies = useMemo(() => (
    data?.content?.filter((movie) => (
      checkSearchText(movie, searchText) && checkWinnerFilter(movie, winnerFilter)
    )) ?? []
  ), [data?.content, searchText, winnerFilter])

  const debounce = useDebounce()

  const handleOnChangeSearchText = (value: string) => {
    debounce(() => {
      setSearchText(value)
    }, 500)
  }

  if (error) return (
    <ErrorIndicator />
  )

  return (
    <MoviesList
      ListHeaderComponent={() => (
        <MoviesListHeader>
          <GS.VStack width="$full">
            <GS.Input
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              size="md"
              variant="outline"
            >
              <GS.InputSlot paddingLeft="$3">
                <GS.InputIcon as={GS.SearchIcon} />
              </GS.InputSlot>
              <GS.InputField
                defaultValue={searchText}
                onChangeText={handleOnChangeSearchText}
                placeholder="Ex: 1989 or Batman"
              />
            </GS.Input>
            <GS.RadioGroup
              marginTop="$5"
              onChange={setWinnerFilter}
              value={winnerFilter}
            >
              <GS.HStack
                justifyContent="center"
                space="lg"
              >
                <GS.Radio value="all">
                  <GS.RadioIndicator marginRight="$2">
                    <GS.RadioIcon as={GS.CircleIcon} />
                  </GS.RadioIndicator>
                  <GS.RadioLabel>All movies</GS.RadioLabel>
                </GS.Radio>
                <GS.Radio value="winner">
                  <GS.RadioIndicator marginRight="$2">
                    <GS.RadioIcon as={GS.CircleIcon} />
                  </GS.RadioIndicator>
                  <GS.RadioLabel>Winners</GS.RadioLabel>
                </GS.Radio>
                <GS.Radio value="not-winner">
                  <GS.RadioIndicator marginRight="$2">
                    <GS.RadioIcon as={GS.CircleIcon} />
                  </GS.RadioIndicator>
                  <GS.RadioLabel>Not Winners</GS.RadioLabel>
                </GS.Radio>
              </GS.HStack>
            </GS.RadioGroup>
          </GS.VStack>
        </MoviesListHeader>
      )}
      movies={filteredMovies}
      refreshing={isLoading}
    />
  )
}

export default MoviesScreen