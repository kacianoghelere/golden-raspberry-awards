import * as GS from '@gluestack-ui/themed'
import React from 'react'

const TopStudiosWithWinnersListHeader: React.FC = () => (
  <GS.HStack
    backgroundColor="$coolGray50"
    borderBottomColor="$coolGray100"
    borderBottomWidth="$1"
    borderTopLeftRadius="$lg"
    borderTopRightRadius="$lg"
    justifyContent='space-between'
    padding="$3"
    space='md'
  >
    <GS.Text fontWeight='$bold'>Studio</GS.Text>
    <GS.Text fontWeight='$bold'>Win Count</GS.Text>
  </GS.HStack>
)

export default TopStudiosWithWinnersListHeader