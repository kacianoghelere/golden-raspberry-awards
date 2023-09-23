import * as GS from '@gluestack-ui/themed'
import React from 'react'

const Error: React.FC = () => (
  <GS.Center
    flex={1}
    mb="$3"
  >
    <GS.Text>Ocorreu um erro ao carregar as informações</GS.Text>
  </GS.Center>
)

export default Error