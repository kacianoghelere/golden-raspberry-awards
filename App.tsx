import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import { DashboardScreen, MoviesScreen } from '~/screens'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Dashboard">
          <Drawer.Screen name="Dashboard" component={DashboardScreen} />
          <Drawer.Screen name="Movies" component={MoviesScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  )
}