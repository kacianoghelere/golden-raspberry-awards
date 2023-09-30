import * as GS from '@gluestack-ui/themed'
import React from 'react'

import * as MoviesListModule from '~/store/modules/movies/list'
import { useDispatch, useSelector } from '~/utils/hooks'

const MoviesListFooter: React.FC = () => {
  const dispatch = useDispatch()

  const { data } = useSelector(({ movies }) => movies)

  const handleGoToNextPage = () => {
    dispatch(MoviesListModule.AsyncActions.fetchNextPage())
  }

  const handleGoToPreviousPage = () => {
    dispatch(MoviesListModule.AsyncActions.fetchPreviousPage())
  }

  const {
    number: currentPage,
    totalPages
  } = data || {}

  if (!totalPages) return null

  return (
    <GS.HStack
      alignItems="center"
      bg="$coolGray200"
      gap="$1"
      justifyContent="space-between"
      px="$4"
      py="$5"
    >
      <GS.Button
        action="primary"
        isDisabled={currentPage === 1}
        isFocusVisible={false}
        onPress={handleGoToPreviousPage}
        size="md"
        variant="outline"
      >
        <GS.ButtonIcon as={GS.ChevronLeftIcon} />
      </GS.Button>
      <GS.Text>{currentPage}/{totalPages}</GS.Text>
      <GS.Button
        action="primary"
        isDisabled={currentPage === totalPages}
        isFocusVisible={false}
        onPress={handleGoToNextPage}
        size="md"
        variant="outline"
      >
        <GS.ButtonIcon as={GS.ChevronRightIcon} />
      </GS.Button>
    </GS.HStack>
  )
}

export default MoviesListFooter