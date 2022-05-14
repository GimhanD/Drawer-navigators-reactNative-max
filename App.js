import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="user"
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#f0e1ff",
          drawerActiveTintColor: "#3c0a6b",
        }}
      >
        <Drawer.Screen 
        name="user" 
        component={UserScreen}
        options={{
          drawerLabel: 'User Screen',
          drawerIcon: ({size, color}) => <Ionicons name='person' size={size} color={color} />
          
        }}
        />
        <Drawer.Screen 
        name="welcome" 
        component={WelcomeScreen}
        options={{
          drawerLabel: 'Welcome Screen',
          drawerIcon: ({color, size}) => <Ionicons name="home" size={size} color={color}/> 
        }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { Ionicons } from '@expo/vector-icons';

// import UserScreen from "./screens/UserScreen";
// import WelcomeScreen from "./screens/WelcomeScreen";
// import "react-native-gesture-handler";

// const BottomTab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <BottomTab.Navigator
//         initialRouteName="user"
//         screenOptions={{
//           headerStyle: { backgroundColor: "#3c0a6b" },
//           headerTintColor: "white",
//           tabBarActiveTintColor: "#3c0a6b"
//         }}
//       >
//         <BottomTab.Screen 
//         name="user" 
//         component={UserScreen}
//         options={{
//           title: "User Screen",
//           tabBarIcon: ({size, color}) => <Ionicons name='person' size={size} color={color} />
          
//         }}
//         />
//         <BottomTab.Screen 
//         name="welcome" 
//         component={WelcomeScreen}
//         options={{
//               tabBarIcon: ({color, size}) => <Ionicons name="home" size={size} color={color}/> 
//         }}
//         />
//       </BottomTab.Navigator>
//     </NavigationContainer>
//   );
// }
