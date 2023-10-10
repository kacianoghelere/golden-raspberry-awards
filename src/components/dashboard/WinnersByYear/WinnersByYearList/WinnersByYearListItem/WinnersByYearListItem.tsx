import * as GS from '@gluestack-ui/themed'
import React from 'react'

import { Movie } from '~/@types/movies'

export interface Props {
  movie: Movie
}

const WinnersByYearListItem: React.FC<Props> = ({
  movie
}) => (
  <GS.HStack
    borderTopColor="$trueGray300"
    borderTopWidth="$1"
    justifyContent='space-between'
    padding="$3"
    space='md'
  >
    <GS.Text
      flex={2}
      testID="winner-movie-id"
    >
      {movie.id}
    </GS.Text>
    <GS.Text
      flex={2}
      testID="winner-movie-year"
    >
      {movie.year}
    </GS.Text>
    <GS.Text
      flex={8}
      testID="winner-movie-title"
    >
      {movie.title}
    </GS.Text>
  </GS.HStack>
)

export { WinnersByYearListItem }

export default React.memo(WinnersByYearListItem)