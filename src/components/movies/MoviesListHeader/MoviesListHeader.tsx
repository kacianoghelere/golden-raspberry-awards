import * as GS from '@gluestack-ui/themed'
import React from 'react'

import { useDebounce } from '~/utils/hooks'
import WinnersSwitch from './WinnersSwitch/WinnersSwitch'
import YearInput from './YearInput/YearInput'

export interface MoviesListHeaderProps {
  onSearch: (params: { onlyWinners: boolean, year: string }) => void
}

const MoviesListHeader: React.FC<MoviesListHeaderProps> = ({
  onSearch = (_params) => { }
}) => {
  const [year, setYear] = React.useState<string>('')

  const [onlyWinners, setOnlyWinners] = React.useState<boolean>(false)

  const debounce = useDebounce()

  const handleOnSearch = () => {
    debounce(() => {
      onSearch({ onlyWinners, year })
    }, 500)
  }

  const handleOnChangeYear = (text: string) => {
    setYear(text)

    handleOnSearch()
  }

  const handleOnToggleOnlyWinners = () => {
    setOnlyWinners((onlyWinners) => !!onlyWinners)

    handleOnSearch()
  }

  return (
    <GS.HStack
      bg="$coolGray200"
      gap="$3"
      px="$4"
      py="$5"
    >
      <YearInput
        onChangeText={handleOnChangeYear}
        value={year}
      />
      <WinnersSwitch
        onToggle={handleOnToggleOnlyWinners}
        value={onlyWinners}
      />
    </GS.HStack>
  )
}

export default MoviesListHeader