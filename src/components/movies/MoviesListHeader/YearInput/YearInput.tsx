import { Input, InputField, Text, VStack } from '@gluestack-ui/themed'
import React from 'react'

export interface Props {
  onChangeText: (value: string) => void
  value: string
}

const YearInput: React.FC<Props> = ({
  onChangeText,
  value
}) => (
  <VStack alignItems="flex-start">
    <Text
      color='$coolGray800'
      fontWeight='$bold'
      mb="$2"
      sx={{
        _dark: {
          color: '$warmGray100'
        }
      }}
      w="$40"
    >
      Year
    </Text>
    <Input
      flexBasis="auto"
      flexGrow={1}
      flexShrink={1}
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      size="md"
      variant="outline"
    >
      <InputField
        onChangeText={onChangeText}
        placeholder="Ex: 1989"
        value={value}
      />
    </Input>
  </VStack>
)

export default YearInput