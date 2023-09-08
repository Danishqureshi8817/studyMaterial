import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity,ActivityIndicator, Alert } from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import { responsiveFontSize,responsiveWidth,responsiveHeight } from 'react-native-responsive-dimensions'
import Colors from '../../Shared/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import Toast from 'react-native-simple-toast';
import { AuthContext } from '../../utiles/AuthContext';
import Services from '../../utiles/Services';
 import CallApi, {setToken ,CallApiJson } from '../../utiles/network';
import EncryptedStorage from 'react-native-encrypted-storage';
 import Loader from '../../components/common/loader/Loader';
 import DeviceCountry, { TYPE_TELEPHONY} from 'react-native-device-country';
 import VersionCheck from 'react-native-version-check';


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const FONT = Dimensions.get('window').fontScale

const Login = () => {

  const navigation = useNavigation();

  const [activity, setActivity] = useState(false)
    
  const [userInfo, setUserInfo] = useState(null)

  const {userData,setUserData} = useContext(AuthContext)

  
  const [loadingStatus, setLoadingStatus] = useState(false)
 
  const [loginButton, setLoginButton] = useState(false)
  
  useEffect(() => {
   

      GoogleSignin.configure({
          webClientId:"591017672992-d1namr6df8decsmfq5li2cbu2h4vantb.apps.googleusercontent.com",
      });

  }, [])

  //   //Toast MSG
  //   const showToast = () =>{
  //     Toast.show('SignIn successfully');
  //  }
      

  // console.log("google data",userInfo?.user?.name)
    //Google SignIn
    
    const signIn = async () => {

        try {
             setActivity(true)
            await GoogleSignin.signOut()


          await GoogleSignin.hasPlayServices();
          const usrInfo = await GoogleSignin.signIn();
          await setUserInfo(usrInfo);
         // await setUserData(usrInfo)
      //  await Services.setUserAuth(usrInfo.user)
          // await storeData(userInfo)
          console.log("user dat",usrInfo)
          let DeviceCountryInfo =  await  DeviceCountry.getCountryCode(TYPE_TELEPHONY);
          const currentVersion = VersionCheck.getCurrentVersion()
  
          const body = {
              email: usrInfo.user.email,
              name: usrInfo.user.name,
              currentVersion:currentVersion,
              user_country: DeviceCountryInfo.code.toUpperCase()
            };
  
            
          const userLogin =  await CallApiJson('login', 'POST', body);
          console.log( 'userLogin', userLogin  )
          setActivity(false)

     if(userLogin.error === true){
      setLoadingStatus(false);
      setLoginButton(false)
      Alert.alert('Error , Something Wrong ');
      return;
    }
       else{
           const ds = await setToken(  userLogin.data );
         //  authCtx.authenticate(ds);
       
           setLoadingStatus(false)
           setLoginButton(false)
         navigation.navigate('Home');

         }

          //when google SignIn method return the user details then we store the info in Asyncstorage for checkinh some vailidations
         
          // await AsyncStorage.setItem('userDetails', JSON.stringify(userData?.user));
          //  showToast()
           //after user succesfully login the jump to home screen 

        } catch (error) {

          setLoadingStatus(false);
          setLoginButton(false)   
          //In this step handelinh the login Erros
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            Alert.alert('  User Cancelled  ');
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            Alert.alert(' Google Sign Already in Progress ');

            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            Alert.alert(' Google Play services not available or outdated ');

            // play services not available or outdated
          } else {
            console.log('errorgoogle', error )
            Alert.alert('  some other error happened   ');

            // some other error happened
          }
        }
      };




  return (
    <View style={{flex:1}} >
      <Image style={{width:WIDTH}} source={require('../../assets/images/login.png')} />

      <View style={styles.container} >
          <Text style={styles.WlmText} >Welcome to</Text>
         
          <Text style={styles.WlmText} >StudyMaterial</Text>

          <Text style={{textAlign:'center',marginTop:HEIGHT*0.10,fontSize:FONT*19}} >Login/Signup</Text>

          
           <LinearGradient colors={[ "#12B3C9","#0C7DE4"]} 
      useAngle={true} angle={280} angleCenter={{ x: 0.5, y: 0.5 }} style={styles.button} >
            <TouchableOpacity disabled={loginButton} onPress={()=>{{ signIn()}}}  style={{flexDirection:'row', gap:responsiveWidth(2.5),width:'100%',height:'100%', justifyContent:'center',
    alignItems:'center',}} >
           <Icon  name="logo-google" size={responsiveWidth(6)} color="#fff" />
              <Text style={{color:Colors.white,fontSize:responsiveFontSize(2.1)}} >Sign In With Google</Text>
              <ActivityIndicator size='small' color='#ffffff' animating={activity} />
              </TouchableOpacity>
           </LinearGradient>
    

      </View>

       
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    width:WIDTH,
    paddingTop:HEIGHT*0.045,
    marginTop:-HEIGHT*0.020,
    backgroundColor:'#ffffff',
    borderTopRightRadius:WIDTH*0.05,
   borderTopLeftRadius:WIDTH*0.05,
   height:HEIGHT

  },

  WlmText:{
    fontSize:FONT*35,
    textAlign:'center',
    fontWeight:'bold',
    color:'#000',
  },
  button:{
    backgroundColor:Colors.primary,
    padding:responsiveWidth(2.5),
    marginVertical:responsiveWidth(8),
    marginHorizontal:responsiveWidth(15),
    flexDirection:'row',
    gap:responsiveWidth(2.5),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:responsiveWidth(3)
  }



})