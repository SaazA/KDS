import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import color from '../../constants/color'
import routes from '../../constants/routes'

export default function Welcome({navigation}) {
    const HandleLogin = ()=>{
        navigation.navigate(routes.LOGINSCREEN);
    }
    const HandleSignUp = ()=>{
        navigation.navigate(routes.SIGNUPSCREEN);
    }
  return (

    <View style={styles.maincontainer}>
        <View style={styles.imagecontainer}>
        <Text style={styles.logotextmain}>सर्वजन हिताय,<Text style={styles.logotextone}>सर्वजन सुखाय </Text> </Text>
            <Image source={require('../../assests/sb-logo.png')} style={styles.image}></Image>
        <Text style={styles.logotext}>Welcome to  </Text>
        <Text style={styles.logotextone}>Social Bharat</Text>
        <Text style={styles.logotext}>One Stop Solution for all your needs</Text>
        </View>
        <View style={styles.contentcontainer}>
            <TouchableOpacity style={styles.buttoncontainer} onPress={HandleLogin}><Text style={styles.buttontext}>Login</Text></TouchableOpacity>
            <Text style={styles.text}>OR</Text>
            <TouchableOpacity style={styles.buttoncontainer} onPress={HandleSignUp}><Text style={styles.buttontext}>SignUp</Text></TouchableOpacity>
        </View>
      
    </View>

  )
}


const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:color.bgcolorSign_up_in
    },
    imagecontainer:{
        flex:.5,
       margin:15,
      justifyContent:'center',
      alignItems:'center',
    },
    image:{
        width:'100%',
        height:100
    },
    contentcontainer:{
        flex:0.5,
    },
    buttoncontainer:{
      backgroundColor:color.black,
      margin:15,
      height:50,
      justifyContent:'center',
      borderRadius:30
    },
    buttontext:{
        textAlign:'center',
        fontSize:20,
    },
    text:{
        fontSize:20,
        color:color.black,
        textAlign:'center'
    },
    logotext:{
        marginTop:10,
        fontSize:20,
        color:color.RegisterandLoginButton,
        textAlign:'center',
        fontWeight:'bold',
    },
    logotextone:{
        fontSize:27,
        color:color.orange,
        textAlign:'center',
        fontWeight:'bold',
    },
    logotextmain:{
        marginBottom:30,
        fontSize:27,
        color:color.RegisterandLoginButton,
        textAlign:'center',
        fontWeight:'bold',
    }
})