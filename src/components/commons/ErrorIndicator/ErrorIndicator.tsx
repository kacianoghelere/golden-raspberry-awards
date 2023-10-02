import * as GS from '@gluestack-ui/themed'
import React from 'react'

const ErrorIndicator: React.FC = () => (
  <GS.Center flex={1}>
    <GS.Text>An error occurred while loading the information</GS.Text>
  </GS.Center>
)

export default ErrorIndicator