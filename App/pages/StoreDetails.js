/**
 * 订单提交结果
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
  ListView,
} from 'react-native';
import { NaviGoBack } from '../utils/CommonUtils';
var {height, width} = Dimensions.get('window');

class StoreDetails extends React.Component {
  constructor(props) {
    super(props);
    this.buttonBackAction=this.buttonBackAction.bind(this);
  } 
    //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  render() {
    const {navigator,route} = this.props;
    return (
        <View style={{backgroundColor:'#f5f5f5',flex:1}}>
             <View style={{height:45,backgroundColor:'black',flexDirection:'row'}}>
                <TouchableOpacity onPress={() => {this.buttonBackAction()}} 
                   style={{width:45,height:45,justifyContent:'center',alignItems:'center'}}>
                    <Image 
                          style={{width:13,height:20}}
                          source={require('../imgs/ic_center_back.png')}
                     />
                </TouchableOpacity>  
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>商家详情</Text>   
                </View>  
                <View style={{width:45,height:45,}}></View>
           </View>
          
       </View>         
    );
  }
}
let styles = StyleSheet.create({
   
});
export default StoreDetails