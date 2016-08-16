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
    TextInput,
} from 'react-native';

import { NaviGoBack } from '../../utils/CommonUtils';
import ShortLineTwo from '../../component/ShortLineTwo';

var username = '';
var password = '';
var repassword = '';
var verifyCode = '';
class Login extends Component {
  constructor(props) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);    
      this.queryVerifyCode=this.queryVerifyCode.bind(this);
      this.resetSuccesAction=this.resetSuccesAction.bind(this);
      this.buttonChangeState=this.buttonChangeState.bind(this);
}
  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  buttonChangeState(position){

  }
  queryVerifyCode(){
      
  }
  resetSuccesAction(){

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
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>重置密码</Text>   
                    </View>
                    <View style={{white:48,height:48}}/>  
                </View>
                <View style={{backgroundColor:'white',marginTop:13}}>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <TextInput 
                            style={{height:40,fontSize: 15,textAlign: 'left',textAlignVertical:'center',flex:1}}
                            placeholder="请输入手机号码"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'username'}
                            multiline={true}
                            autoFocus={true}
                            onChangeText={(text) => {
                               username = text;
                            }}
                      />
                    </View>
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <TextInput 
                            style={{height:40,fontSize: 15,textAlign: 'left',textAlignVertical:'center',flex:1}}
                            placeholder="请输入验证码"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'verifyCode'}
                            multiline={true}
                            autoFocus={true}
                            onChangeText={(text) => {
                               verifyCode = text;
                            }}
                           />
                          <TouchableOpacity onPress={() => {this.queryVerifyCode()}} 
                                            style={{width:100,height:45,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:13,color:'#777'}}>获取验证码</Text>
                          </TouchableOpacity>
                    </View>
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <TextInput 
                            style={{height:40,fontSize: 15,textAlign: 'left',textAlignVertical:'center',flex:1}}
                            placeholder="请输入密码(6位以上字符)"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'username'}
                            multiline={true}
                            autoFocus={true}
                            onChangeText={(text) => {
                               username = text;
                            }}
                           />
                          <TouchableOpacity onPress={() => {this.buttonChangeState(0)}} style={{width:45,height:45,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../../imgs/logre/ic_pwd_off.png')} 
                                        style={{width:17,height:14,marginLeft:13}}/>
                          </TouchableOpacity>
                    </View>
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <TextInput 
                            style={{height:40,fontSize: 15,textAlign: 'left',textAlignVertical:'center',flex:1}}
                            placeholder="请再输入一遍密码"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'repassword'}
                            multiline={true}
                            autoFocus={true}
                            onChangeText={(text) => {
                               repassword = text;
                            }}
                           />
                          <TouchableOpacity onPress={() => {this.buttonChangeState(1)}} style={{width:45,height:45,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../../imgs/logre/ic_pwd_off.png')} 
                                        style={{width:17,height:14,marginLeft:13}}/>
                          </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => {this.resetSuccesAction()}} 
                                  style={{justifyContent:'center',marginTop:13,alignItems:'center'}}>
                    <Image source={require('../../imgs/logre/ic_login_btn.png')} 
                           style={{width:300,height:40,justifyContent:'center',alignItems:'center'}}>
                          <Text style={{color:'white'}}>完成</Text>
                    </Image>
                </TouchableOpacity>
             </View>
        );
    }
}
const styles=StyleSheet.create({
    item_layout:{
        backgroundColor:'white',
        height:45,
        justifyContent:'center'
    }
});
export default Login;