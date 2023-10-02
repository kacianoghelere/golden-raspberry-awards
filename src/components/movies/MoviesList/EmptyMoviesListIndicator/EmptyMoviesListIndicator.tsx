import * as GS from '@gluestack-ui/themed'
import React from 'react'

const EmptyMoviesListIndicator: React.FC = () => (
  <GS.Box padding="$3">
    <GS.Text>The list is empty</GS.Text>
  </GS.Box>
)

export default EmptyMoviesListIndicator