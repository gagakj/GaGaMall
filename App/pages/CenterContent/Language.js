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
                <View style={{height:45,backgroundColor:'black',flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{marginLeft:10,justifyContent:'center'}}>
                       <Image 
                          style={{width:13,height:20}}
                          source={require('../../imgs/ic_center_back.png')}
                       />
                    </TouchableOpacity>  
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>语言切换</Text>   
                    </View>  
                </View>
                <LanguageItem title="简体中文(Simple Chinease)" 
                              onPress={()=>{this.itemButtonAction(0)}} 
                              selected={true}
                              style={{marginTop:10}}
                              />
                <Image source={require('../../imgs/ic_short_bar.png')} style={styles.short_line}/>
                <LanguageItem title="英文(Enligsh)" onPress={()=>{this.itemButtonAction(1)}} selected={false}/>
                <Image source={require('../../imgs/ic_short_bar.png')}/>
             </View>
        );
    }
}

const styles=StyleSheet.create({
    short_line:{
        marginLeft:10,
    },
    item_layout:{
        backgroundColor:'white',
        height:45,
        justifyContent:'center'
    },
});
export default Language;