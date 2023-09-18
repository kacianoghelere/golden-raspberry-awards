import { Box, HStack, Text, VStack } from '@gluestack-ui/themed'
import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { Movie } from '~/@types/movies/movies-list'
import { Error, Loading } from '~/components/commons'
import { useMoviesList } from '~/utils/hooks'

const MoviesScreen: React.FC = () => {
  const { isLoading, error, data } = useMoviesList()

  if (isLoading) return (
    <Loading />
  )

  if (error) return (
    <Error />
  )

  const renderItem = ({ item }: ListRenderItemInfo<Movie>) => (
    <Box
      borderBottomWidth='$1'
      py='$2'
      px='$3'
    >
      <HStack space='md' justifyContent='space-between'>
        {/* <Avatar size='md'>
          <AvatarImage source={{ uri: item.avatarUrl }} />
        </Avatar> */}
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
            {item.title}
          </Text>
          <Text
            color='$coolGray600'
            sx={{
              _dark: {
                color: '$warmGray200'
              }
            }}
          >
            {item.studios.join(', ')}
          </Text>
        </VStack>
        <Text
          alignSelf='flex-start'
          color='$coolGray800'
          fontSize='$xs'
        >
          {item.year}
        </Text>
      </HStack>
    </Box>
  )

  return (
    <Box p="$0">
      <FlatList<Movie>
        data={data?.data.content ?? []}
        keyExtractor={(movie, index) => `movie-${movie.id}-${index}`}
        renderItem={renderItem}
      />
    </Box>
  )
}

export default MoviesScreen