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

import { NaviGoBack } from '../../utils/CommonUtils';
import ShortLineTwo from '../../component/ShortLineTwo';

import FetchHttpClient, { form,header } from 'fetch-http-client';
import {HOST,REGISTER_ACTION} from  '../../common/Request';
import {NativeModules} from 'react-native';
var EncryptionModule = NativeModules.EncryptionModule;

import Loading from '../../component/Loading';

const client = new FetchHttpClient(HOST);


var username = '';
var password = '';
var verifyCode = '';
class Login extends Component {
  constructor(props) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);    
      this.buttonChangeState=this.buttonChangeState.bind(this);
      this.registerAction=this.registerAction.bind(this);
}
  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  buttonChangeState(){
    
  }
  registerAction(){
       const {navigator} = this.props;
       //用户登录
       if(username === ''){
               (Platform.OS === 'android') ? ToastAndroid.show('用户名不能为空...',ToastAndroid.SHORT) : ''; 
               return;
        }
       if(password === ''){
               (Platform.OS === 'android') ? ToastAndroid.show('密码不能为空...',ToastAndroid.SHORT) : ''; 
               return;
        }
       this.getLoading().show();
       EncryptionModule.MD5ByCallBack(password,(msg)=>{
       client.addMiddleware(form());
                client.addMiddleware(request => {
                request.options.headers['appkey'] = '8a9283a0567d5bea01567d5beaf90000';
                  });
              client.post(REGISTER_ACTION, {
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
                     (Platform.OS === 'android') ? ToastAndroid.show('注册成功...',ToastAndroid.SHORT) : '';  
                     NaviGoBack(navigator);
                 }else{
                     (Platform.OS === 'android') ? ToastAndroid.show(result.msg,ToastAndroid.SHORT) : ''; 
                 }
              }).catch((error) => {
                this.getLoading().dismiss();  
                (Platform.OS === 'android') ? ToastAndroid.show('网络连接异常...',ToastAndroid.SHORT) : '';  
              });
             },(error)=>{
               this.getLoading().dismiss();  
               (Platform.OS === 'android') ? ToastAndroid.show('密码加密失败...',ToastAndroid.SHORT) : ''; 
           });
  }
  //获取加载进度组件
  getLoading() {
    return this.refs['loading'];
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
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>注册</Text>   
                    </View> 
                    <View style={{width:48,height:48}}/> 
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
                            placeholder="请输入密码(6位以上字符)"
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
                <Text style={{marginTop:13,marginLeft:13,fontSize:12,color:'#777'}}>注册则视为您已同意《嘎嘎商城用户协议》</Text>
                <TouchableOpacity onPress={() => {this.registerAction()}} 
                                  style={{justifyContent:'center',marginTop:13,alignItems:'center'}}>
                    <Image source={require('../../imgs/logre/ic_login_btn.png')} 
                           style={{width:300,height:40,justifyContent:'center',alignItems:'center'}}>
                          <Text style={{color:'white'}}>注册</Text>
                    </Image>
                </TouchableOpacity>
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
    }
});
export default Login;