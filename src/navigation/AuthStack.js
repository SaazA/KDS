import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/MainScreen';
import Welcome from '../screens/WelcomeScreen';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';
import AppStack from './AppStack';


const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={Main} options={{headerShown:false}}/>
      <Stack.Screen name="WelcomeScreen" component={Welcome} options={{headerShown:false}}/>
      <Stack.Screen name="LoginScreen" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name="HomeTab" component={AppStack} options={{headerShown:false}}/>

    </Stack.Navigator>
  )
}