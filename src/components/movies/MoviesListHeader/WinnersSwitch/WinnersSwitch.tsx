import { Switch, Text, VStack } from '@gluestack-ui/themed'
import React from 'react'

export interface WinnersSwitchProps {
  onToggle: () => void,
  value: boolean
}

const WinnersSwitch: React.FC<WinnersSwitchProps> = ({ onToggle, value }) => (
  <VStack alignItems="flex-start">
    <Text
      color='$coolGray800'
      fontWeight='$bold'
      sx={{
        _dark: {
          color: '$warmGray100'
        }
      }}
      w="$40"
    >
      Winners Only
    </Text>
    <Switch
      isDisabled={false}
      onToggle={onToggle}
      size="md"
      value={value}
    />
  </VStack>
)

export default WinnersSwitch