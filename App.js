import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import Login from './src/screens/Login/Login'
import Navigation from './src/navigation/index'
import { AuthContext } from './src/utiles/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import Services from './src/utiles/Services';
import MainStack from './src/navigation/MainStack';


const App = () => {

  const [userData,setUserData]=useState();

  useEffect(() => {
    
    Services.getUserAuth().then(resp => {
      console.log(resp)
      if(resp){
        setUserData(resp)
      }else{
        setUserData(null)
      }

    })
  }, [])
  

  return (

    <View style={styles.container} >
    <AuthContext.Provider value={{userData,setUserData}}>
      
     <Navigation/>
    </AuthContext.Provider>
    </View>
  )
}

export default App

const styles = StyleSheet.create({

 container:{
  flex:1,
  backgroundColor:'#F6F8FC'
 }

})