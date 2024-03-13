import {View, Text} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import Members from '../screens/Members';
import Jobs from '../screens/Jobs';
import Business from '../screens/Business';
import Matrimonial from '../screens/Matrimonial';
import Services from '../screens/Services';
import color from '../constants/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomDrawer from '../Components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const drawerIcon = ({focused, size}, name) => {
    return (
      <Icon
        name={name}
        size={size}
        color={focused ? color.danger : color.blue}
      />
    );
  };
  
  return (
    <Drawer.Navigator
    drawerContent={props=><CustomDrawer {...props}/>}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{drawerIcon: options => drawerIcon(options, 'home')}}
      /> 
      <Drawer.Screen
        name="MembersScreen"
        component={Members}
        options={{drawerIcon: options => drawerIcon(options, 'home')}}
      />
      <Drawer.Screen
        name="JobsScreen"
        component={Jobs}
        options={{drawerIcon: options => drawerIcon(options, 'home')}}
      />
      <Drawer.Screen
        name="BusinessScreen"
        component={Business}
        options={{drawerIcon: options => drawerIcon(options, 'heart')}}
      />
      <Drawer.Screen
        name="MatrimoinialScreen"
        component={Matrimonial}
        options={{drawerIcon: options => drawerIcon(options, 'home')}}
      />
      <Drawer.Screen
        name="ServiceScreen"
        component={Services}
        options={{drawerIcon: options => drawerIcon(options, 'home')}}
      />
    </Drawer.Navigator>
  );
}
