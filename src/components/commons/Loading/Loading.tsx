import * as GS from '@gluestack-ui/themed'
import React from 'react'

const Loading: React.FC = () => (
  <GS.Center flex={1}>
    <GS.Spinner />
  </GS.Center>
)

export default Loading