import { StyleSheet, Text, View,Button,ScrollView } from 'react-native'
import React,{useContext} from 'react'
import Services from '../../utiles/Services'
import { AuthContext } from '../../utiles/AuthContext'
import WelcomeHeader from '../../components/WelcomeHeader'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import SearchBar from '../../components/SearchBar'
import Colors from '../../Shared/Colors'
import Slider from '../../components/Slider'
import BranchList from '../../components/BranchList'

const Home = () => {

  const {userData,setUserData} = useContext(AuthContext)

  // #F6F8FC
  return (

    <View style={{flex:1,paddingHorizontal:responsiveWidth(3),paddingTop:responsiveHeight(2)}} >

<WelcomeHeader/>
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>

      <Slider />
      <BranchList />
       <BranchList />
        <BranchList />

    </ScrollView>
    </View>

  )
}

export default Home

const styles = StyleSheet.create({})