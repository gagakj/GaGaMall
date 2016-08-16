/**
 * 订单确认
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
  InteractionManager,
} from 'react-native';
import { NaviGoBack } from '../utils/CommonUtils';
var {height, width} = Dimensions.get('window');
import OrderResult from './OrderResult';

class OrderConfirm extends React.Component {

  constructor(props) {
    super(props);
    this.buttonBackAction=this.buttonBackAction.bind(this);   
    this.payItemAction=this.payItemAction.bind(this);
  } 
    //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }

  //订单提交
  payItemAction(){
      const {navigator} = this.props;
      InteractionManager.runAfterInteractions(() => {
        navigator.push({
          component: OrderResult,
          name: 'OrderResult'
           });
        });
  }

  render() {
    const {navigator,route} = this.props;
    return (
        <View style={{backgroundColor:'#f5f5f5',flex:1}}>
             <View style={{height:48,backgroundColor:'black',flexDirection:'row'}}>
                <TouchableOpacity onPress={() => {this.buttonBackAction()}} 
                   style={{width:48,height:48,justifyContent:'center',alignItems:'center'}}>
                    <Image 
                          style={{width:13,height:20}}
                          source={require('../imgs/ic_center_back.png')}
                     />
                </TouchableOpacity>  
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>订单确认</Text>   
                </View>  
                <View style={{width:48,height:48,}}></View>
          </View>

          <View style={{flex:1,justifyContent:'flex-end'}}>
                <TouchableOpacity onPress={()=>{this.payItemAction()}}>
                      <Image source={require('../imgs/cart/ic_cart_btn_bg.png')} 
                             style={{width:width,height:40,justifyContent:'center',alignItems:'center'}}>
                             <Text style={{color:'white',fontSize:14,backgroundColor:'#00000000'}}>确定提交</Text>
                      </Image>
               </TouchableOpacity>
          </View>
       </View>         
    );
  }
}
let styles = StyleSheet.create({
   
});
export default OrderConfirm