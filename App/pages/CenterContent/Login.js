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
import Register from './Register';
import ShortLineTwo from '../../component/ShortLineTwo';
import ResetPwd from  './ResetPwd';

var username = '';
var password = '';
class Login extends Component {
  constructor(props) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);    
      this.buttonRegisterOrLoginAction=this.buttonRegisterOrLoginAction.bind(this);  
      this.buttonChangeState=this.buttonChangeState.bind(this);
      this.findPwdAction=this.findPwdAction.bind(this);
      this.thirdPartLoginAction=this.thirdPartLoginAction.bind(this);
}
  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  //用户注册
  buttonRegisterOrLoginAction(position){
      const {navigator} = this.props;
      if(position === 0){
          
      }else if(position === 1){
           InteractionManager.runAfterInteractions(() => {
               navigator.push({
                   component: Register,
                   name: 'Register'
                });
            });
        }
  }
  buttonChangeState(){

  }
  findPwdAction(){
     const {navigator} = this.props;
     InteractionManager.runAfterInteractions(() => {
               navigator.push({
                   component: ResetPwd,
                   name: 'ResetPwd'
                });
            });
  }
  thirdPartLoginAction(position){

  }
  render() {
        return (
             <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <View style={{height:45,backgroundColor:'black',flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{width:45,height:45,alignItems:'center',justifyContent:'center'}}>
                       <Image 
                          style={{width:13,height:20}}
                          source={require('../../imgs/ic_center_back.png')}
                       />
                    </TouchableOpacity>  
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>登录</Text>   
                    </View>  
                    <TouchableOpacity onPress={() => {this.buttonRegisterOrLoginAction(1)}} style={{width:45,height:45,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:15,color:'white',alignSelf:'center'}}>注册</Text>   
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',marginTop:13}}>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <Image source={require('../../imgs/logre/ic_us_icon.png')} 
                                 style={{width:17,height:14,marginLeft:13}}/>
                          <TextInput 
                            style={{height:40,fontSize: 15,textAlign: 'left',textAlignVertical:'center',flex:1}}
                            placeholder="嘎嘎商城账号/手机/邮箱"
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
                          <Image source={require('../../imgs/logre/ic_pwd_icon.png')} 
                                 style={{width:17,height:14,marginLeft:13}}/>
                          <TextInput 
                            style={{height:40,fontSize: 15,textAlign: 'left',textAlignVertical:'center',flex:1}}
                            placeholder="密码"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'password'}
                            multiline={true}
                            autoFocus={true}
                            onChangeText={(text) => {
                               password = text;
                            }}
                           />
                          <TouchableOpacity onPress={() => {this.buttonChangeState()}} style={{width:45,height:45,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../../imgs/logre/ic_pwd_off.png')} 
                                        style={{width:17,height:14,marginLeft:13}}/>
                          </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => {this.buttonRegisterOrLoginAction(0)}} 
                                  style={{justifyContent:'center',marginTop:13,alignItems:'center'}}>
                    <Image source={require('../../imgs/logre/ic_login_btn.png')} 
                           style={{width:300,height:40,justifyContent:'center',alignItems:'center'}}>
                          <Text style={{color:'white'}}>登录</Text>
                    </Image>
                </TouchableOpacity>
                <View style={{alignItems:'flex-end',marginTop:13}}>
                    <TouchableOpacity onPress={()=>{this.findPwdAction()}} style={{marginRight:10}}>
                        <Text style={{fontSize:13,color:'#777'}}>找回密码</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:20,alignItems:'center'}}>
                    <Text style={{fontSize:13,color:'#777'}}>第三方账号登录</Text>
                    <View style={{flexDirection:'row',marginTop:20}}>
                          <TouchableOpacity onPress={()=>{this.thirdPartLoginAction(0)}}>
                              <Image source={require('../../imgs/logre/ic_login_weixin.png')} style={{width:50,height:50}}/>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={()=>{this.thirdPartLoginAction(1)}} style={{marginLeft:15}}>
                              <Image source={require('../../imgs/logre/ic_login_qq.png')} style={{width:50,height:50}}/>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={()=>{this.thirdPartLoginAction(2)}} style={{marginLeft:15}}>
                              <Image source={require('../../imgs/logre/ic_login_fb.png')} style={{width:50,height:50}}/>
                          </TouchableOpacity>
                    </View>
                </View>
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