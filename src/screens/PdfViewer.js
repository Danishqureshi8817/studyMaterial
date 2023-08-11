import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize, responsiveHeight,responsiveWidth } from 'react-native-responsive-dimensions'
import Pdf from 'react-native-pdf';
import Colors from '../Shared/Colors';
import { useNavigation } from '@react-navigation/native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;


const PdfViewer = () => {

const navigation = useNavigation()
const [totalPg, setTotalPg] = useState(0)
const [CPgae, setCPgae] = useState(0)


  return (
    <View style={{padding:responsiveWidth(5),paddingTop:responsiveHeight(3.5),}} > 
       
       <TouchableOpacity onPress={()=>navigation.goBack()} >
       <Icon  name="arrow-back-sharp" size={responsiveWidth(6)} color="#333" />
       </TouchableOpacity>

       <Text style={{fontSize:responsiveFontSize(2.4),fontWeight:'bold',color:'#333',marginTop:responsiveHeight(2)}} >Subject Name</Text>

       <Pdf

                    trustAllCerts={false}
                    source={{uri:'https://studymaterial.newindiagyan.online/uploads/course/toc.pdf'}}
                    onLoadComplete={(numberOfPages,filePath) => {
                        setTotalPg(numberOfPages)
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                        setCPgae(page)
                        console.log(`Current page: ${page}`);
                    }}
                    page={2}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={{height:HEIGHT*0.6,width:'100%',marginTop:responsiveHeight(2)}}
                      enablePaging={true}
                      horizontal={true}

                    />
                    
                    <Text style={{color:'#333',alignSelf:'center'}} >{CPgae}/{totalPg}</Text>
    </View>
  )
}

export default PdfViewer

const styles = StyleSheet.create({})