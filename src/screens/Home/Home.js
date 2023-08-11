import { StyleSheet, Text, View,Button,ScrollView } from 'react-native'
import React,{useContext} from 'react'
import Services from '../../utiles/Services'
import { AuthContext } from '../../utiles/AuthContext'
import WelcomeHeader from '../../components/WelcomeHeader'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import SearchBar from '../../components/SearchBar'
import Colors from '../../Shared/Colors'
import Slider from '../../components/Slider'
import BranchList from '../../components/BranchList'

const Home = () => {

  const {userData,setUserData} = useContext(AuthContext)

  // #F6F8FC
  return (
    <ScrollView style={{padding:responsiveWidth(5),}} >
      <WelcomeHeader/>
      <SearchBar/>
      <Slider />
      <BranchList />
       <BranchList />
        <BranchList />
   
   
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})