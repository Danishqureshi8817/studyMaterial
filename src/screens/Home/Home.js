import { View, Alert, Text, Button, Pressable, SafeAreaView, ScrollView, Image, TouchableOpacity, Modal, TouchableHighlight, ToastAndroid, BackHandler, Linking } from 'react-native'
 import { useLayoutEffect, useState, useEffect, useRef } from "react";

import Services from '../../utiles/Services'
import { AuthContext } from '../../utiles/AuthContext'
import WelcomeHeader from '../../components/WelcomeHeader'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import SearchBar from '../../components/SearchBar'
import Colors from '../../Shared/Colors'
import Slider from '../../components/Slider'
import BranchList from '../../components/BranchList'

import CallApi, {setToken ,CallApiJson } from '../../utiles/network';
import EncryptedStorage from 'react-native-encrypted-storage';
 import Loader from '../../components/common/loader/Loader';
 import DeviceCountry, { TYPE_TELEPHONY} from 'react-native-device-country';
 import VersionCheck from 'react-native-version-check';

const Home = () => {

   const [banner, setBanner] = useState()
   const [branch, setBranches] = useState()

  const banners = async () => {
    const banners = await CallApiJson('banner', 'GET');
   console.log("Banner data",banners);
     setBanner(banners?.data);
   }

   const branches = async () => {
    const branchData = await CallApiJson('semesterList', 'GET');
   console.log("semesterList data",branchData);
   setBranches(branchData?.data);
   }

   const checkUpdateNeeded = async () => {
    const latestVersion = await VersionCheck.getLatestVersion();
    const currentVersion = VersionCheck.getCurrentVersion()
    let updateNeeded = await VersionCheck.needUpdate();
    console.log('checkUpdateNeeded-latestVersion', latestVersion, 'userSettings?.data?.version_control_froce', userSettings?.data, 'currentVersion', currentVersion, 'updateNeeded', updateNeeded)
    if ((updateNeeded.isNeeded)) {
      Alert.alert('Update Required ',
        'Download Latest Version From PlayStore',
        [
          {
            text: 'Update Now ',
            onPress: () => {
              BackHandler.exitApp();
              Linking.openURL(updateNeeded.storeUrl);
            }
          }
        ],
        { cancelable: false }


      );
    }
  }
  
  useEffect(() => {
    banners();
    branches();

   // checkUpdateNeeded()
    return () => {
      console.log('return')
    }
  }, [])

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

 