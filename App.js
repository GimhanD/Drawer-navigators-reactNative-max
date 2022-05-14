import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

import UserScreen from './screens/UserScreen'
import WelcomeScreen from './screens/WelcomeScreen';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName='user'>
          <Drawer.Screen name="user" component={UserScreen}/>
          <Drawer.Screen name="welcome" component={WelcomeScreen}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}
