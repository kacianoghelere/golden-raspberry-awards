import { StyledProvider, config } from '@gluestack-ui/themed'
import React from 'react'
import renderer from 'react-test-renderer'

export const render = (children: React.ReactNode) => (
  renderer.create(
    <StyledProvider config={config.theme}>
      {children}
    </StyledProvider>
  )
)
