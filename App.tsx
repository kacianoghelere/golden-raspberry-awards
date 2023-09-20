import { GluestackUIProvider, config } from '@gluestack-ui/themed'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'

import { store } from '~/store'
import { DashboardScreen, MoviesScreen } from '~/screens'

const Drawer = createDrawerNavigator()

const queryClient = new QueryClient()

export default function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config.theme}>
        <QueryClientProvider client={queryClient}>
          <StatusBar style='auto' />
          <NavigationContainer>
            <Drawer.Navigator initialRouteName='Dashboard'>
              <Drawer.Screen
                component={DashboardScreen}
                name='Dashboard'
              />
              <Drawer.Screen
                component={MoviesScreen}
                name='Movies'
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </QueryClientProvider>
      </GluestackUIProvider>
    </Provider>
  )
}