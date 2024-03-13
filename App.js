


import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';

const App = () => {
  return (
    <NavigationContainer>
    <AuthStack/>
  </NavigationContainer>
  )
}

export default App




