'use strict';
import React, {Component} from 'react';
import{ 
    View,
    Text,
    BackAndroid,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';

import { NaviGoBack } from '../../utils/CommonUtils';
import SettingItem from '../../component/SettingItem';

class Setting extends Component {
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
  //按钮点击
  itemButtonAction(position){

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
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>设置</Text>   
                    </View>  
                </View>
                <View style={{flexDirection:'column',flex:1}}>
                        <SettingItem title="更改密码" onPress={()=>{this.itemButtonAction(2)}}/>
                        <Image source={require('../../imgs/ic_short_bar.png')} style={styles.short_line}/>
                        <SettingItem title="语言" onPress={()=>{this.itemButtonAction(3)}}/>
                        <Image source={require('../../imgs/ic_short_bar.png')} style={styles.short_line}/>
                        <SettingItem title="报告问题" onPress={()=>{this.itemButtonAction(4)}}/>
                        <Image source={require('../../imgs/ic_short_bar.png')} style={styles.short_line}/>
                        <SettingItem title="评分" onPress={()=>{this.itemButtonAction(5)}}/>
                        <Image source={require('../../imgs/ic_short_bar.png')} style={styles.short_line}/>
                        <SettingItem title="隐私策略" onPress={()=>{this.itemButtonAction(6)}}/>
                        <Image source={require('../../imgs/ic_short_bar.png')} style={styles.short_line}/>
                        <SettingItem title="条款" onPress={()=>{this.itemButtonAction(7)}}/>
                        <Image source={require('../../imgs/ic_short_bar.png')} style={styles.short_line}/>
                        <SettingItem title="关于我们" onPress={()=>{this.itemButtonAction(8)}}/>
                   <View style={{flex:1,justifyContent:'flex-end'}}>
                        <TouchableOpacity style={styles.item_layout} onPress={()=>{this.itemButtonAction(0)}}>
                            <Text style={{marginLeft:10}}>清空缓存</Text>   
                        </TouchableOpacity>
                        <Image source={require('../../imgs/ic_short_bar.png')} style={styles.short_line}/>
                        <TouchableOpacity style={styles.item_layout} onPress={()=>{this.itemButtonAction(1)}}>
                            <Text style={{marginLeft:10}}>注销登录</Text>   
                        </TouchableOpacity>
                   </View>
                </View>
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
    }
});
export default Setting;