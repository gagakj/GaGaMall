/**
 * 商品详情
 */
'use strict';
import React from 'react';
import {
  Dimensions,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { NaviGoBack } from '../utils/CommonUtils';
var {height, width} = Dimensions.get('window');

class GoodDetails extends React.Component {
  constructor(props) {
    super(props);
    this.buttonBackAction=this.buttonBackAction.bind(this);    
    this.state={
       
      }
  } 
    //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  render() {
    return (
       <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:48,backgroundColor:'black',flexDirection:'row'}}>
                <TouchableOpacity onPress={() => {this.buttonBackAction()}} 
                                  style={{width:48,height:48,alignItems:'center',justifyContent:'center'}}>
                    <Image 
                          style={{width:13,height:20}}
                          source={require('../imgs/ic_center_back.png')}
                     />
                </TouchableOpacity>  
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>商品详情</Text>   
                </View>  
                <View style={{height:48,width:48}}/>
          </View>
          
      </View>
    );
  }
}
let styles = StyleSheet.create({

});
export default GoodDetails;