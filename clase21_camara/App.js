import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Register from './src/screens/Register';
import Login from './src/screens/Login';
import HomeMenu from './src/components/HomeMenu';

import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    //Plantear la navegación
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Register" component={ Register } />
        <Stack.Screen name="Login" component={ Login } />
        <Stack.Screen name="HomeMenu" component={ HomeMenu } />
        
     </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
