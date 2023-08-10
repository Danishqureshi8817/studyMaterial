import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity, } from 'react-native'
import React from 'react'
import { responsiveFontSize,responsiveWidth,responsiveHeight } from 'react-native-responsive-dimensions'
import Colors from '../../Shared/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native';


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const FONT = Dimensions.get('window').fontScale

const Login = () => {

  const navigation = useNavigation();

  return (
    <View style={{flex:1}} >
      <Image style={{width:WIDTH}} source={require('../../assets/images/login.png')} />

      <View style={styles.container} >
          <Text style={styles.WlmText} >Welcome to</Text>
         
          <Text style={styles.WlmText} >StudyMaterial</Text>

          <Text style={{textAlign:'center',marginTop:HEIGHT*0.10,fontSize:FONT*19}} >Login/Signup</Text>

          
           <LinearGradient colors={[ "#12B3C9","#0C7DE4"]} 
      useAngle={true} angle={280} angleCenter={{ x: 0.5, y: 0.5 }} style={styles.button} >
            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} style={{flexDirection:'row', gap:responsiveWidth(2.5),width:'100%',height:'100%', justifyContent:'center',
    alignItems:'center',}} >
           <Icon  name="logo-google" size={responsiveWidth(6)} color="#fff" />
              <Text style={{color:Colors.white,fontSize:responsiveFontSize(2.1)}} >Sign In With Google</Text>
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