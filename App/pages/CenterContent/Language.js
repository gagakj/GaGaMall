/**
 * 多语言切换
 */
'use strict';
import React, {Component} from 'react';
import{ 
    View,
    Text,
    BackAndroid,
    TouchableOpacity,
    Image,
    StyleSheet,
    InteractionManager,
} from 'react-native';

import { NaviGoBack } from '../../utils/CommonUtils';
import ShortLine from '../../component/ShortLine';
import LanguageItem from '../../component/LanguageItem';

class Language extends Component {
  constructor(props) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);   
      this.itemButtonAction=this.itemButtonAction.bind(this); 
  }
  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  itemButtonAction(position){
      if(position === 0){

      }else if(position === 1){

      }
  }
  render() {
        return (
             <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <View style={{height:48,backgroundColor:'black',flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => {this.buttonBackAction()}} 
                                      style={{width:48,height:48,alignItems:'center',justifyContent:'center'}}>
                       <Image 
                          style={{width:13,height:20}}
                          source={require('../../imgs/ic_center_back.png')}
                       />
                    </TouchableOpacity>  
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>语言切换</Text>   
                    </View>  
                    <View style={{white:48,height:48}}/>
                </View>
                <LanguageItem title="简体中文(Simple Chinease)" 
                              onPress={()=>{this.itemButtonAction(0)}} 
                              selected={true}
                              style={{marginTop:10}}
                              />
                <ShortLine/>
                <LanguageItem title="英文(Enligsh)" onPress={()=>{this.itemButtonAction(1)}} selected={false}/>
                
             </View>
        );
    }
}

const styles=StyleSheet.create({
    item_layout:{
        backgroundColor:'white',
        height:45,
        justifyContent:'center'
    },
});
export default Language;