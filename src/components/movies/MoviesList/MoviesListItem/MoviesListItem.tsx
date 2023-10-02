import * as GS from '@gluestack-ui/themed'
import React from 'react'

import { Movie } from '~/@types/movies'

export interface Props {
  movie: Movie
}

const MoviesListItem: React.FC<Props> = ({ movie }) => (
  <GS.Box
    borderBottomColor="$coolGray200"
    borderBottomWidth="$1"
    padding="$3"
  >
    <GS.HStack
      justifyContent="space-between"
      space="md"
    >
      <GS.VStack flex={3}>
        <GS.Text
          color="$coolGray800"
          fontWeight="$bold"
          testID="movie-title"
        >
          {movie.title}
        </GS.Text>
        <GS.Text
          color="$coolGray600"
          testID="movie-studios"
        >
          {movie.studios.join(', ')}
        </GS.Text>
      </GS.VStack>
      <GS.VStack
        flex={1}
        justifyContent="flex-start"
      >
        <GS.Text
          alignSelf="flex-end"
          color="$coolGray800"
          fontSize="$sm"
          testID="movie-year"
        >
          {movie.year}
        </GS.Text>
        {movie.winner ? (
          <GS.Badge
            action="info"
            borderRadius="$full"
            size="md"
            variant="outline"
            testID="movie-winner-badge"
          >
            <GS.BadgeText>Winner</GS.BadgeText>
            <GS.BadgeIcon as={GS.StarIcon} ml="$2" />
          </GS.Badge>
        ) : null}
      </GS.VStack>
    </GS.HStack>
  </GS.Box>
)

export { MoviesListItem }

export default React.memo(MoviesListItem)