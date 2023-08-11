import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { responsiveWidth,responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import Colors from '../../Shared/Colors';
import ShivaniContent from '../../components/ShivaniContent';
import { useNavigation } from '@react-navigation/native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const BranchDetail = () => {

  const navigation = useNavigation()

  return (
    <View style={{padding:responsiveWidth(5),paddingTop:responsiveHeight(3.5),flex:1}} >
       
       <TouchableOpacity onPress={()=>navigation.goBack()} >
       <Icon  name="arrow-back-sharp" size={responsiveWidth(6)} color="#333" />
       </TouchableOpacity>

         <View>
            <Text style={{fontSize:responsiveFontSize(2.4),fontWeight:'bold',color:'#333'}} >CSE Branch</Text>
            <Text style={{color:Colors.gray}} >1 Semester</Text>

            <Image source={require('../../assets/images/image16.png') } style={{height:HEIGHT*0.2,width:'100%',marginTop:responsiveHeight(1.5),borderRadius:responsiveWidth(3)}}  />

            {/* <Text style={{marginTop:responsiveHeight(1.5),fontSize:responsiveFontSize(1.9),fontWeight:'bold',color:'#333'}} >About Semester</Text>
             <Text style={{color:Colors.gray,}} >Version 2.x was re-implemented using React Hooks so it only works with version 0.59 or above Version 3.x was re-implemented using Typescript and it works with react-native-web</Text> */}
             
         </View>
        
         

         <ShivaniContent/>
         <ShivaniContent/>
         

         {/* <ShivaniContent/> */}
 

    </View>
  )
}

export default BranchDetail

const styles = StyleSheet.create({})