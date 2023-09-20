import * as GS from '@gluestack-ui/themed'
import React from 'react'

export interface MoviesListFooterProps {
  currentPage?: number,
  onNextPage?: () => void,
  onPreviousPage?: () => void,
  totalPages?: number
}

const MoviesListFooter: React.FC<MoviesListFooterProps> = ({
  currentPage = 1,
  onNextPage = () => { },
  onPreviousPage = () => { },
  totalPages = 1
}) => {
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
        onPress={onPreviousPage}
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
        onPress={onNextPage}
        size="md"
        variant="outline"
      >
        <GS.ButtonIcon as={GS.ChevronRightIcon} />
      </GS.Button>
    </GS.HStack>
  )
}

export default MoviesListFooter