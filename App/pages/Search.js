/**
 * 城市选择
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
  TextInput,
} from 'react-native';

import { NaviGoBack } from '../utils/CommonUtils';
var content = '';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.buttonBackAction=this.buttonBackAction.bind(this);    
    this.topItemAction=this.topItemAction.bind(this);

  } 
    //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  topItemAction(position){
      
  }
  render() {
    return (
       <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:45,backgroundColor:'black',flexDirection:'row'}}>
                <View style={{width:45,height:45,justifyContent:'center'}}>
                     <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{justifyContent:'center',alignItems:'center'}} >
                           <Image 
                                 style={{width:13,height:20}}
                                 source={require('../imgs/ic_center_back.png')}
                           />
                     </TouchableOpacity>  
                </View>
                <View style={{flex:1,justifyContent:'center',}}>
                    <TextInput 
                            style={{ fontSize: 14, textAlign: 'left',flex:1,color:'white'}}
                            placeholder="请输入商家或者商品名称"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'content'}
                            multiline={true}
                            autoFocus={true}
                            onChangeText={(text) => {
                               content = text;
                            }}
                      />
                </View>
                <View style={{width:45,height:45,justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.topItemAction(0)}}>
                         <Image source={require('../imgs/home/ic_home_top_search.png')} 
                           style={{width:24,height:24,marginRight:8,alignItems:'center'}}/>
                    </TouchableOpacity>
                </View>  
          </View>
      </View>
    );
  }
}
let styles = StyleSheet.create({
});
export default Search;