import * as GS from '@gluestack-ui/themed'
import React from 'react'

export interface Props {
  limit?: number
}

const TopStudiosWithWinners: React.FC<Props> = ({
  limit = 3
}) => (
  <GS.Box
    borderWidth="$1"
    mb="$3"
    p="$4"
  >
    <GS.Text>Top Studios With Winners</GS.Text>
  </GS.Box>
)

export default TopStudiosWithWinners