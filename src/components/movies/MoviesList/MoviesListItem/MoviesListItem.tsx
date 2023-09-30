import {
  Badge,
  BadgeIcon,
  BadgeText,
  Box,
  HStack,
  StarIcon,
  Text,
  VStack
} from '@gluestack-ui/themed'
import React from 'react'

import { Movie } from '~/@types/movies'

export interface Props {
  movie: Movie
}

const MoviesListItem: React.FC<Props> = ({ movie }) => (
  <Box
    borderBottomColor="$coolGray200"
    borderBottomWidth="$1"
    padding="$3"
  >
    <HStack
      justifyContent="space-between"
      space="md"
    >
      <VStack flex={3}>
        <Text
          color="$coolGray800"
          fontWeight="$bold"
        >
          {movie.title}
        </Text>
        <Text color="$coolGray600">
          {movie.studios.join(', ')}
        </Text>
      </VStack>
      <VStack
        flex={1}
        justifyContent="flex-start"
      >
        <Text
          alignSelf="flex-end"
          color="$coolGray800"
          fontSize="$sm"
        >
          {movie.year}
        </Text>
        {movie.winner ? (
          <Badge
            action="info"
            borderRadius="$full"
            size="md"
            variant="outline"
          >
            <BadgeText>Winner</BadgeText>
            <BadgeIcon as={StarIcon} ml="$2" />
          </Badge>
        ) : null}
      </VStack>
    </HStack>
  </Box>
)

export { MoviesListItem }

export default React.memo(MoviesListItem)