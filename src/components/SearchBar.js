import { StyleSheet, Text, View,TextInput} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../Shared/Colors';


const SearchBar = () => {

    

  return (
    <View style={styles.container} >
       <Icon  name="search" size={responsiveWidth(6)} color={Colors.gray} />
       <TextInput 
        placeholder='Search'
       />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({


    container:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        padding:responsiveWidth(0.8),
        borderRadius:responsiveWidth(2.5),
        elevation:responsiveWidth(0.2),
        marginTop:responsiveHeight(1.2),
        gap:responsiveWidth(1.5)
    }

})