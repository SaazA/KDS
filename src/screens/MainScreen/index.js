import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import routes from '../../constants/routes'

export default function Main({navigation}) {
    setTimeout(()=>{
        navigation.navigate(routes.WELCOMESCREEN)
    },2000)
  return (
    <View style={styles.maincontainer}>
    <ImageBackground source={require('../../assests/MainScreen.png')} resizeMode="cover" style={styles.image}></ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
    },
    image:{
        flex:1,
        justifyContent:'center',
    }
})