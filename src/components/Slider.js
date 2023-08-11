import React from 'react';
import { Text, Dimensions, StyleSheet, View,Image } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Colors from '../Shared/Colors';

const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

const carouselData = [
 
      require('../assets/images/slide.png')
    ,
    
       require('../assets/images/slide.png')
    ,
  
       require('../assets/images/slide.png')
    
]


const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const Slider = () => (
  <View style={styles.container}>
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination
      data={carouselData}
      paginationActiveColor={Colors.bgColor}
      paginationStyleItem={{width:responsiveWidth(2.5),height:responsiveHeight(1.2),marginTop:responsiveHeight(1)}}
      renderItem={({ item }) =>{ 
        // console.log("slider",item)
     return (
        <View style={[styles.child, ]}>
          <Image source={item} style={{width:WIDTH,height:'100%'}} />
        </View>
      )}
      }
    />
  </View>
);

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { height:HEIGHT*0.2,marginTop:responsiveHeight(1.2),justifyContent:'center',borderRadius:responsiveWidth(3),overflow:'hidden' },
  child: { width:WIDTH, justifyContent: 'center', },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});

export default Slider;