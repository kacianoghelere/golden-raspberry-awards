import { Center, Spinner } from '@gluestack-ui/themed'
import React from 'react'

const Loading: React.FC = () => (
  <Center flex={1}>
    <Spinner />
  </Center>
)

export default Loading