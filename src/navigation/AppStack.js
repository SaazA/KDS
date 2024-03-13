import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';
const Stack = createNativeStackNavigator();
export default function AppStack() {
  return (
    <Stack.Navigator>

    <Stack.Screen name="DrawerNavigator" component={DrawerNavigation} options={{headerShown:false}}/>

  </Stack.Navigator>

  )
}