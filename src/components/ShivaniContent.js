import { StyleSheet, Text, View, FlatList,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight,responsiveWidth } from 'react-native-responsive-dimensions'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Shared/Colors';
import { useNavigation } from '@react-navigation/native';

const ShivaniContent = () => {

    const navigation = useNavigation()

    const Data = [
        {
            id:'01',
            name:'Introduction'
        },
        {
            id:'02',
            name:'Variables'
        },
        {
            id:'03',
            name:'Data Types'
        },
        {
            id:'04',
            name:'Numbers'
        },
        {
            id:'05',
            name:'Casting'
        },
        // {
        //     id:'06',
        //     name:'Introduction'
        // },
        // {
        //     id:'07',
        //     name:'Variables'
        // },
        // {
        //     id:'08',
        //     name:'Data Types'
        // },
        // {
        //     id:'09',
        //     name:'Numbers'
        // },
        // {
        //     id:'10',
        //     name:'Casting'
        // },
    ]




  return (
    <View style={{marginTop:responsiveHeight(1.5),flex:1}} >
      <Text style={{color:'#333',fontWeight:'bold',fontSize:responsiveFontSize(1.9)}} >Shivani's Content</Text>

      <FlatList
      style={{marginTop:responsiveHeight(2)}}
       data={Data}
     
       renderItem={({item,index}) =>  (
        <TouchableOpacity onPress={()=>navigation.navigate('PdfViewer')} style={{display:'flex',flexDirection:'row',backgroundColor:Colors.white,marginBottom:responsiveHeight(1),padding:responsiveWidth(2.5),alignItems:'center',borderRadius:responsiveWidth(1)}} >
            <Text style={{color:Colors.gray,fontWeight:'bold',fontSize:responsiveFontSize(2.4),marginRight:responsiveWidth(6)}} >{item.id}</Text>
            <Text style={{color:'#333',fontSize:responsiveFontSize(1.8),fontWeight:'bold'}} >{item.name}</Text>
            <Icon  name="play-circle" size={responsiveWidth(6)} color={Colors.primary} style={{position:'absolute',right:responsiveWidth(3)}} />
        </TouchableOpacity>
       )}

      />

   
    </View>
  )
}

export default ShivaniContent

const styles = StyleSheet.create({})