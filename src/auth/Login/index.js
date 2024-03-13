import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import color from '../../constants/color'
import routes from '../../constants/routes'

export default function Login({navigation}) {
    const HandleSignUp = ()=>{
        navigation.navigate(routes.SIGNUPSCREEN)
    }
    const HandleLogin=()=>{
        navigation.navigate(routes.HOMETAB)
    }
  return (
    <View style={styles.maincontainer}>
      <View style={styles.imagecontainer}><Image source={require('../../assests/Signuppage.png')} style={styles.image}></Image></View>
      <View style={styles.contentcontainer}>
        <Text style={styles.headmidtext}>Login</Text>
        <TextInput style={styles.InputBox} placeholder='Enter your password'></TextInput>
        <TextInput style={styles.InputBox}placeholder='Enter your number'></TextInput>
        <TouchableOpacity style={styles.buttoncontainer} onPress={HandleLogin}>
            <Text>Login With PassWord</Text>
        </TouchableOpacity>
        <Text style={styles.midtext}>OR</Text>
     
        <TouchableOpacity style={styles.buttoncontainer}>
            <Text>Login With OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.leftsidetextcontainer} onPress={HandleSignUp}>
        <Text style={styles.leftsidetext}>New User? SignUp</Text>
        </TouchableOpacity>
      
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
    },
    contentcontainer:{
        flex:.5,
    },
    image:{
        flex:1,
        justifyContent:'center',
        width:'100%'
    },
    InputBox:{
        borderWidth: 1,
        margin:10
    },
    buttoncontainer:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:color.black
    },
    headmidtext:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'
    },
    midtext:{
        textAlign:'center'
    },
    leftsidetextcontainer:{
        marginLeft:20
    },
    leftsidetext:{
    fontSize:18
    }
})