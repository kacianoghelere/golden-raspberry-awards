/* eslint-disable import/order */
import * as GS from '@gluestack-ui/themed'
import React from 'react'
import { FlatList, FlatListProps } from 'react-native'

import { Movie } from '~/@types/movies/movies-list'
import MoviesListItem from './MoviesListItem/MoviesListItem'

type OmittedProps = 'data' | 'keyExtractor' | 'renderItem'

type CustomFlatListProps = Omit<FlatListProps<Movie>, OmittedProps>

export interface MoviesListProps extends CustomFlatListProps {
  movies: Movie[]
}

const MoviesList: React.FC<MoviesListProps> = ({ movies, ...props }) => (
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