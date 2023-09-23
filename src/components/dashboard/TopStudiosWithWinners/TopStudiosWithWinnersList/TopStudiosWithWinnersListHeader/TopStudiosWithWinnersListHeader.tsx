import { HStack, Text } from '@gluestack-ui/themed'
import React from 'react'

const TopStudiosWithWinnersListHeader: React.FC = () => (
  <HStack
    backgroundColor="$coolGray50"
    borderBottomColor="$coolGray100"
    borderBottomWidth="$1"
    justifyContent='space-between'
    padding="$3"
    space='md'
  >
    <Text fontWeight='$bold'>Studio</Text>
    <Text fontWeight='$bold'>Win Count</Text>
  </HStack>
)

export default TopStudiosWithWinnersListHeader