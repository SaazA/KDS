import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
  return (
   <DrawerContentScrollView {...props}>
    <DrawerItemList {...props}/>
   </DrawerContentScrollView>
  )
}

export default CustomDrawer