import * as GS from '@gluestack-ui/themed'
import React from 'react'

export interface Props {
  children?: React.ReactNode
}

const MoviesListHeader: React.FC<Props> = ({ children }) => (
  <GS.HStack
    backgroundColor="$coolGray200"
    gap="$3"
    paddingHorizontal="$4"
    paddingVertical="$5"
  >
    {children}
  </GS.HStack>
)

export default MoviesListHeader