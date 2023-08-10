import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator();


const mainStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
    <Stack.Screen name="Home" component={Home} options={{}} />

  </Stack.Navigator>
  )
}

export default mainStack