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
    Platform,
    ToastAndroid,
} from 'react-native';
//(Platform.OS === 'ios') ? '' : '';
import { NaviGoBack } from '../../utils/CommonUtils';
import Register from './Register';
import ShortLineTwo from '../../component/ShortLineTwo';
import ResetPwd from  './ResetPwd';
import FetchHttpClient, { form,header } from 'fetch-http-client';
import {HOST,LOGIN_ACTION} from  '../../common/Request';
import { toastShort } from '../../utils/ToastUtil';
import {NativeModules} from 'react-native';
var EncryptionModule = NativeModules.EncryptionModule;

import Loading from '../../component/Loading';

const client = new FetchHttpClient(HOST);

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
  //用户登录/注册
  buttonRegisterOrLoginAction(position){
      const {navigator} = this.props;
      if(position === 0){
            //用户登录
           if(username === ''){
               toastShort('用户名不能为空...'); 
               return;
           }
           if(password === ''){
               toastShort('密码不能为空...');
               return;
           }
           this.getLoading().show();
           EncryptionModule.MD5ByCallBack(password,(msg)=>{
               client.addMiddleware(form());
                     client.addMiddleware(request => {
                     request.options.headers['appkey'] = '8a9283a0567d5bea01567d5beaf90000';
                  });
              client.post(LOGIN_ACTION, {
                  form: {
                    username: username,
                    password: msg,
                 },
              }).then(response => {
                return response.json();
              }).then((result)=>{
                 this.getLoading().dismiss(); 
                 if(result.code === '0'){
                     //登录成功..
                     toastShort('登录成功...'); 
                     NaviGoBack(navigator);
                 }else{
                     toastShort(result.msg);
                 }
              }).catch((error) => {
                this.getLoading().dismiss();  
                toastShort('网络连接异常...');
              });
             },(error)=>{
               this.getLoading().dismiss();  
               toastShort('密码加密失败...');
           });
           
      }else if(position === 1){
           //用户注册
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

  //获取加载进度组件
  getLoading() {
    return this.refs['loading'];
  }
  render() {
        return (
             <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <View style={styles.topbar_bg}>
                    <TouchableOpacity onPress={() => {this.buttonBackAction()}} 
                                      style={styles.topbar_left_item}>
                       <Image 
                          style={{width:13,height:20}}
                          source={require('../../imgs/ic_center_back.png')}
                       />
                    </TouchableOpacity>  
                    <View style={styles.topbar_center_bg}>
                       <Text style={styles.topbar_center_tv}>登录</Text>   
                    </View>  
                    <TouchableOpacity onPress={() => {this.buttonRegisterOrLoginAction(1)}} 
                                      style={styles.topbar_right_item}>
                       <Text style={styles.topbar_right_tv}>注册</Text>   
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
                            secureTextEntry={true}
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
                 <Loading ref={'loading'} text={'登录中...'} />
             </View>
        );
    }
}
const styles=StyleSheet.create({
    item_layout:{
        backgroundColor:'white',
        height:48,
        justifyContent:'center'
    },
    topbar_bg:{
        height:48,
        backgroundColor:'black',
        flexDirection:'row'
    },
    topbar_left_item:{
        width:48,
        height:48,
        alignItems:'center',
        justifyContent:'center'
    },
    topbar_center_bg:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    topbar_center_tv:{
        fontSize:18,
        color:'white',
        alignSelf:'center'
    },
    topbar_right_item:{
        width:48,
        height:48,
        alignItems:'center',
        justifyContent:'center'
    },
    topbar_right_tv:{
        fontSize:15,
        color:'white',
        alignSelf:'center'
    }
});
export default Login;