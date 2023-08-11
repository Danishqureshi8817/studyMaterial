import { FlatList, Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors'
import { useNavigation } from '@react-navigation/native'


const BranchList = () => {

    const navigation = useNavigation()

    const data = [
        {
            id:'01',
            name:'CSE',
            image:require('../assets/images/image6.png'),
            desp:'8 Semester'
        },
        {
            id:'02',
            name:'ME',
            image:require('../assets/images/image7.png'),
            desp:'8 Semester'
        },
        {
            id:'09',
            name:'MBA',
            image:require('../assets/images/image9.png'),
            desp:'8 Semester'
        },

    ]


  return (
    <View style={{marginTop:10}} >

    <Text style={{fontSize:20,fontWeight:'bold',marginTop:3,color:'#333'}} >Braches</Text>



      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
            <TouchableOpacity
                onPress={()=>navigation.navigate('BranchDetail')}
             style={{backgroundColor:Colors.white,marginRight:10,borderRadius:10}} >
                <Image source={item.image} style={{width:210,height:120,borderRadius:10}} />

                <View style={{padding:10}} >
                <Text style={{fontWeight:'bold',fontSize:15,color:'#333'}} >{item.name}</Text>
                <Text style={{color:Colors.gray,fontWeight:'300'}} >{item.desp}</Text>
                </View>
          
            </TouchableOpacity>

        )}
      />
    </View>
  )
}

export default BranchList

const styles = StyleSheet.create({})