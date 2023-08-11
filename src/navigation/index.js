import { View, Text } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { AuthContext } from '../utiles/AuthContext';
import Services from '../utiles/Services';


const index = () => {

  const {userData,setUserData} = useContext(AuthContext)

  useEffect(() => {
    
    Services.getUserAuth().then( resp => {
      console.log(resp)
      if(resp){
        setUserData(resp)
      }
      else{
        setUserData(null)
      }
    })
  }, [])
  

  return (
   <NavigationContainer>
{/* { userData ?<MainStack/>:<AuthStack/>} */}
<MainStack/>
   </NavigationContainer>
  )
}

export default index