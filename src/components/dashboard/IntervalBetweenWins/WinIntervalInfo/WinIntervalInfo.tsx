import * as GS from '@gluestack-ui/themed'
import React from 'react'

import { WinIntervalForProducers } from '~/@types/dashboard'

export interface Props {
  title: 'Maximum' | 'Minimum',
  intervalInfo: WinIntervalForProducers
}

const WinIntervalInfo: React.FC<Props> = ({
  title,
  intervalInfo
}) => (
  <GS.VStack marginTop="$3">
    <GS.Text
      fontSize="$lg"
      fontWeight="$bold"
      marginBottom="$3"
    >
      {title}
    </GS.Text>
    <GS.Box borderWidth="$1">
      <GS.HStack
        backgroundColor="$white"
        borderBottomColor="$trueGray300"
        borderBottomWidth="$1"
        justifyContent="space-between"
        padding="$3"
      >
        <GS.Text fontWeight="$bold">Producer</GS.Text>
        <GS.Text fontWeight="$bold">Interval</GS.Text>
      </GS.HStack>
      <GS.HStack
        borderBottomColor="trueGray300"
        borderBottomWidth="$1"
        justifyContent='space-between'
        padding="$3"
        space='md'
      >
        <GS.Text>{intervalInfo.producer}</GS.Text>
        <GS.Text>
          {intervalInfo.previousWin} ~ {intervalInfo.followingWin}
        </GS.Text>
      </GS.HStack>
    </GS.Box>
  </GS.VStack>
)

export default WinIntervalInfo