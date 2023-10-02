import * as GS from '@gluestack-ui/themed'
import React from 'react'

import { Movie } from '~/@types/movies'
import WinnersByYearListHeader from './WinnersByYearListHeader/WinnersByYearListHeader'
import WinnersByYearListItem from './WinnersByYearListItem/WinnersByYearListItem'

export interface Props {
  movies: Movie[],
  onSearch: (year: string) => void
}

const WinnersByYearList: React.FC<Props> = ({
  movies,
  onSearch = (_year) => { }
}) => (
  <GS.Box
    borderRadius="$lg"
    borderColor="$trueGray300"
    borderWidth="$1"
  >
    <WinnersByYearListHeader onSearch={onSearch} />
    {movies?.map((item, index) => (
      <WinnersByYearListItem
        key={`movie-${item.year}-${index}`}
        movie={item}
      />
    ), [])}
  </GS.Box>
)

export default WinnersByYearList