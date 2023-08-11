import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import React,{useContext,useState} from 'react'
import { AuthContext } from '../utiles/AuthContext'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'


const WelcomeHeader = () => {

    const {userData,setUserData} = useContext(AuthContext)


  return (
    <View style={styles.container} >
       <View>
       <Text>Hello,</Text>
      <Text style={{fontSize:responsiveFontSize(2.4),fontWeight:'bold',color:'#333'}} >{userData?.name}</Text>
       </View>

       <Image source={require('../assets/images/User.png')} style={{width:responsiveWidth(10),height:responsiveHeight(5),borderRadius:responsiveWidth(5)}} />



    </View>
  )
}

export default WelcomeHeader

const styles = StyleSheet.create({

    container:{
        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})