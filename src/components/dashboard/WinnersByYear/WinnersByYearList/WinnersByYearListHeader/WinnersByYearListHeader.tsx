import * as GS from '@gluestack-ui/themed'
import React from 'react'

import { useDebounce } from '~/utils/hooks'

export interface Props {
  onSearch: (year: string) => void
}

const WinnersByYearListHeader: React.FC<Props> = ({
  onSearch = (_year) => { }
}) => {
  const [year, setYear] = React.useState<string>('')

  const debounce = useDebounce()

  const handleOnSearch = () => {
    debounce(() => {
      onSearch(year)
    }, 500)
  }

  return (
    <GS.VStack>
      <GS.HStack
        alignItems="flex-end"
        justifyContent="flex-start"
        padding="$3"
        space="md"
        width="$full"
      >
        <GS.Box width="$40">
          <GS.Input
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <GS.InputField
              onChangeText={(text) => setYear(text)}
              placeholder="Ex: 1981"
              testID="search-field"
              value={`${year}`}
            />
          </GS.Input>
        </GS.Box>
        <GS.Button
          onPress={handleOnSearch}
          testID="search-button"
        >
          <GS.ButtonIcon as={GS.SearchIcon} />
        </GS.Button>
      </GS.HStack>
      <GS.HStack
        backgroundColor="$coolGray50"
        borderBottomColor="$coolGray100"
        borderBottomWidth="$1"
        borderTopLeftRadius="$lg"
        borderTopRightRadius="$lg"
        justifyContent="space-between"
        padding="$3"
        space="md"
      >
        <GS.Text
          flex={2}
          fontWeight="$bold"
        >
          Id
        </GS.Text>
        <GS.Text
          flex={2}
          fontWeight="$bold"
        >
          Year
        </GS.Text>
        <GS.Text
          flex={8}
          fontWeight="$bold"
        >
          Title
        </GS.Text>
      </GS.HStack>
    </GS.VStack>
  )
}

export default WinnersByYearListHeader