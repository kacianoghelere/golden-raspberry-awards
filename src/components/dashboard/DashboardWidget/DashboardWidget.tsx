import * as GS from '@gluestack-ui/themed'
import React, { useEffect } from 'react'

export interface Props {
  children?: React.ReactNode
  onMount?: () => void
  title: string
}

const DashboardWidget: React.FC<Props> = ({
  children,
  onMount = () => { },
  title
}) => {
  useEffect(() => {
    onMount()
  }, [])

  return (
    <GS.Box
      backgroundColor="$white"
      borderRadius="$lg"
      marginBottom="$3"
      padding="$3"
    >
      <GS.Text
        fontSize="$lg"
        fontWeight="$bold"
        marginBottom="$3"
      >
        {title}
      </GS.Text>
      {children}
    </GS.Box>
  )
}

export default DashboardWidget