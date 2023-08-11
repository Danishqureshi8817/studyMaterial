import { View, Text } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import BranchDetail from '../screens/BranchDetail/BranchDetail';
import PdfViewer from '../screens/PdfViewer';
import { AuthContext } from '../utiles/AuthContext';
import Services from '../utiles/Services';

import Splash from '../screens/Splash/Splash';

const Stack = createNativeStackNavigator();


const MainStack = () => {

  const {userData,setUserData} = useContext(AuthContext)
  const [splashShow, setSplashShow] = useState(true)
  const [login, setlogin] = useState(true)


   const splashStatus = async() => {
   await setSplashShow(false)
   }

   const load = async() => {
    Services.getUserAuth().then( resp => {
      console.log("mmmain",resp)
      if(resp){
        setUserData(resp)
        console.log("DAT...")
        setlogin(false)
        
      }
      else{
        setUserData(null)
      }
    })
   }

  useEffect(() => {
    
   load()

    setTimeout( async () => {
      await splashStatus()
   }, 2000);

  

 




  }, [])


  return (
    <Stack.Navigator>
 {splashShow?<Stack.Screen name='Splash' component={Splash} options={{headerShown:false}} />:null}
     {login && <Stack.Screen name="Login" component={Login} options={{headerShown:false}} /> }
   
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
    <Stack.Screen name="BranchDetail" component={BranchDetail} options={{headerShown:false}} />
    <Stack.Screen name="PdfViewer" component={PdfViewer} options={{headerShown:false}} />


  </Stack.Navigator>
  )
}

export default MainStack