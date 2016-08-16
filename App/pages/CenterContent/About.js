/**
 * 关于我们
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

import { NaviGoBack } from '../../utils/CommonUtils';

class About extends React.Component {
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
    return (
       <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:48,backgroundColor:'black',flexDirection:'row'}}>
                <TouchableOpacity onPress={() => {this.buttonBackAction()}} 
                                  style={{width:48,height:48,alignItems:'center',justifyContent:'center'}}>
                    <Image 
                          style={{width:13,height:20}}
                          source={require('../../imgs/ic_center_back.png')}
                     />
                </TouchableOpacity>  
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>问题报告</Text>   
                </View> 
                <View style={{width:48,height:48}}/> 
          </View>
          <View style={{alignItems:'center',marginTop:10}}>
             <Image source={require('../../imgs/ic_center_more_icon.png')} style={{width:110,height:110}}/>
             <Text style={styles.text_version}>版本:V1.0</Text>
          </View>
          <View style={{alignItems:'center',marginTop:10}}>
            <Text style={{fontSize:15,color:'black'}}>RN开发的商城客户端,仅供学习使用!~</Text>
          </View>
          <View style={{marginBottom:10,flex:1}}>
             <View style={styles.text_right}>
               <View style={{flexDirection:'row'}}>
                  <Text>免责声明:所有内容均来自:</Text>
                  <Text style={{color:'#63B8FF'}}>江清清的技术专栏</Text>
               </View>   
               <View>
                  <Text style={{color:'#63B8FF'}}>https://github.com/jiangqqlmj/GaGaMall</Text>
               </View>
             </View>
          </View>
      </View>
    );
  }
}
let styles = StyleSheet.create({
   text_version:{
      color:'#ddd', 
      marginTop:8
   },
   text_right:{
      alignSelf:'center',
      alignItems:'center',
      flex:1,
      justifyContent:'flex-end'
   }
});
export default About;