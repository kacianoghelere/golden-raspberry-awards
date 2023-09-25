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
    <GS.Text>{movie.year}</GS.Text>
    <GS.Text>{movie.title}</GS.Text>
  </GS.HStack>
)

export { WinnersByYearListItem }

export default React.memo(WinnersByYearListItem)