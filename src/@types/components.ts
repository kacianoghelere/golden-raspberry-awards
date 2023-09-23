import { FlatListProps } from 'react-native'

export type FlatListOmittedProps = 'data' | 'keyExtractor' | 'renderItem'

export type CustomFlatListProps<TData> = Omit<FlatListProps<TData>, FlatListOmittedProps>