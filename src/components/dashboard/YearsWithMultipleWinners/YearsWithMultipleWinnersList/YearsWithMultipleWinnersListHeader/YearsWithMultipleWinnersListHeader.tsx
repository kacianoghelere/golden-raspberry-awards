import { HStack, Text } from '@gluestack-ui/themed'
import React from 'react'

const YearsWithMultipleWinnersListHeader: React.FC = () => (
  <HStack
    backgroundColor="$coolGray50"
    borderBottomColor="$coolGray100"
    borderBottomWidth="$1"
    justifyContent='space-between'
    padding="$3"
    space='md'
  >
    <Text fontWeight='$bold'>Year</Text>
    <Text fontWeight='$bold'>Winner Count</Text>
  </HStack>
)

export default YearsWithMultipleWinnersListHeader