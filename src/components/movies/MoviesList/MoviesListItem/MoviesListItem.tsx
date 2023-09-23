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
    borderBottomWidth='$1'
    py='$3'
    px='$4'
  >
    <HStack
      justifyContent='space-between'
      space='md'
    >
      <VStack>
        <Text
          color='$coolGray800'
          fontWeight='$bold'
          sx={{
            _dark: {
              color: '$warmGray100'
            }
          }}
        >
          {movie.title}
        </Text>
        <Text
          color='$coolGray600'
          sx={{
            _dark: {
              color: '$warmGray200'
            }
          }}
        >
          {movie.studios.join(', ')}
        </Text>
      </VStack>
      <VStack justifyContent="flex-start">
        <Text
          alignSelf='flex-end'
          color='$coolGray800'
          fontSize='$xs'
        >
          {movie.year}
        </Text>
        {movie.winner ? (
          <Badge
            action="info"
            borderRadius="$none"
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