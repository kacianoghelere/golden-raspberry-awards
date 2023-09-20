import * as GS from '@gluestack-ui/themed'
import React from 'react'

export interface YearsWithMultipleWinnersProps {
  limit?: number
}

const YearsWithMultipleWinners: React.FC<YearsWithMultipleWinnersProps> = ({
  limit = 3
}) => (
  <GS.Box
    borderWidth="$1"
    mb="$3"
    p="$4"
  >
    <GS.Text>Years With Multiple Winners</GS.Text>
  </GS.Box>
)

export default YearsWithMultipleWinners