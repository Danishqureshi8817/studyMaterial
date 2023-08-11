import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
const Splash = () => {
  return (
    <LinearGradient colors={[ "#0C7DE4","#12B3C9"]} 
    useAngle={true} angle={160} angleCenter={{ x: 0.4, y: 0.6 }} style={{flex:1,justifyContent:'center',alignItems:'center'}} >

      
       <ActivityIndicator size={'large'} color='#fff' />

    </LinearGradient>
   
  )
}

export default Splash

const styles = StyleSheet.create({})