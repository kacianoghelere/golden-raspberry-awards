/* eslint-disable import/order */
import * as GS from '@gluestack-ui/themed'
import React from 'react'
import { FlatList } from 'react-native'

import { CustomFlatListProps } from '~/@types/components'
import { Movie } from '~/@types/movies'
import MoviesListItem from './MoviesListItem/MoviesListItem'

export interface Props extends CustomFlatListProps<Movie> {
  movies: Movie[]
}

const MoviesList: React.FC<Props> = ({ movies, ...props }) => (
  <GS.Box p="$0">
    <FlatList<Movie>
      {...props}
      data={movies}
      keyExtractor={(movie, index) => `movie-${movie.id}-${index}`}
      renderItem={({ item }) => <MoviesListItem movie={item} />}
    />
  </GS.Box>
)

export default MoviesList