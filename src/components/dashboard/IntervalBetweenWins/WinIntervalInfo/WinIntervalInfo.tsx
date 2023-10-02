import * as GS from '@gluestack-ui/themed'
import React, { ComponentProps } from 'react'

import { WinIntervalForProducers } from '~/@types/dashboard'

export interface Props extends ComponentProps<typeof GS.VStack> {
  title: 'Maximum' | 'Minimum',
  intervalInfo: WinIntervalForProducers
}

const WinIntervalInfo: React.FC<Props> = ({
  title,
  intervalInfo,
  ...props
}) => (
  <GS.VStack
    {...props}
    marginTop="$3"
  >
    <GS.Text
      fontSize="$lg"
      fontWeight="$bold"
      marginBottom="$3"
      testID="interval-title"
    >
      {title}
    </GS.Text>
    <GS.Box
      borderRadius="$lg"
      borderColor="$trueGray300"
      borderWidth="$1"
    >
      <GS.HStack
        backgroundColor="$coolGray50"
        borderBottomColor="$trueGray300"
        borderBottomWidth="$1"
        borderTopLeftRadius="$lg"
        borderTopRightRadius="$lg"
        justifyContent="space-between"
        padding="$3"
      >
        <GS.Text fontWeight="$bold">Producer</GS.Text>
        <GS.Text fontWeight="$bold">Interval</GS.Text>
      </GS.HStack>
      <GS.HStack
        borderTopColor="$trueGray300"
        borderTopWidth="$1"
        justifyContent='space-between'
        padding="$3"
        space='md'
      >
        <GS.Text testID="producer-name">{intervalInfo.producer}</GS.Text>
        <GS.Text testID="win-interval">
          {`${intervalInfo.previousWin}~${intervalInfo.followingWin}`}
        </GS.Text>
      </GS.HStack>
    </GS.Box>
  </GS.VStack>
)

export default WinIntervalInfo