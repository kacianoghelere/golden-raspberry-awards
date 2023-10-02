import * as GS from '@gluestack-ui/themed'
import React, { ComponentProps } from 'react'

export interface Props extends ComponentProps<typeof GS.InputField> { }

const Input: React.FC<Props> = (props) => (
  <GS.Input
    flexBasis="auto"
    flexGrow={1}
    flexShrink={1}
    isDisabled={false}
    isInvalid={false}
    isReadOnly={false}
    size="md"
    variant="outline"
  >
    <GS.InputField {...props} />
  </GS.Input>
)

export default Input