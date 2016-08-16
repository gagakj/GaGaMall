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
    ScrollView,
} from 'react-native';

import { NaviGoBack } from '../../utils/CommonUtils';
import ShortLineTwo from '../../component/ShortLineTwo';

var name = '';
var email = '';
var infor = '';
var tel = '';
var gender = '';

class ModifyInformation extends Component {
  constructor(props) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);  
      this.informationSave=this.informationSave.bind(this);  
      this.modifyIcon=this.modifyIcon.bind(this);
  }
  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  //信息保存
  informationSave(){
      
  }
  //修改头像
  modifyIcon(){
    
  }
  render() {
        return (
             <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <View style={{height:48,backgroundColor:'black',flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{width:48,height:48,alignItems:'center',justifyContent:'center'}}>
                       <Image 
                          style={{width:13,height:20}}
                          source={require('../../imgs/ic_center_back.png')}
                       />
                    </TouchableOpacity>  
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>个人信息</Text>   
                    </View> 
                    <TouchableOpacity onPress={() => {this.informationSave()}} 
                                      style={{width:48,height:48,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:15,color:'white',alignSelf:'center'}}>保存</Text>   
                    </TouchableOpacity>
                </View>
                <ScrollView style={{flex:1}}>
                <View style={{marginTop:13,backgroundColor:'white'}}>
                     <TouchableOpacity onPress={()=>{this.modifyIcon()}} style={{height:45}}>
                            <View style={{flexDirection:'row',height:45,alignItems:'center',flex:1}}>
                                 <Image source={require('../../imgs/modify/ic_modify_icon.png')} 
                                        style={{width:18,height:18,marginLeft:13}}/>
                                 <Text style={{fontSize:12,color:'#777',marginLeft:8}}>头像</Text>
                                 <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',height:45}}>
                                        <Image source={require('../../imgs/modify/ic_modify_arrow.png')} 
                                        style={{width:12,height:15,flexDirection:'row',marginRight:13}}/>
                                 </View>      
                            </View>
                    </TouchableOpacity>
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center',flex:1}}>
                                 <Image source={require('../../imgs/modify/ic_modify_name.png')} 
                                        style={{width:18,height:18,marginLeft:13}}/>
                                 <Text style={{fontSize:12,color:'#777',marginLeft:8}}>姓名</Text>
                                 <TextInput 
                                        style={{height:40,fontSize: 15,textAlign: 'left',textAlignVertical:'center',flex:1}}
                                        placeholderTextColor="#aaaaaa"
                                        underlineColorAndroid="transparent"
                                        numberOfLines={1}
                                        ref={'name'}
                                        multiline={true}
                                        onChangeText={(text) => {
                                            name = text;
                                            }}
                                />   
                            </View>
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center',flex:1}}>
                                 <Image source={require('../../imgs/modify/ic_modify_email.png')} 
                                        style={{width:18,height:18,marginLeft:13}}/>
                                 <Text style={{fontSize:12,color:'#777',marginLeft:8}}>邮箱</Text>
                                 <TextInput 
                                        style={{height:40,fontSize: 15,textAlign: 'left',textAlignVertical:'center',flex:1}}
                                        placeholderTextColor="#aaaaaa"
                                        underlineColorAndroid="transparent"
                                        numberOfLines={1}
                                        ref={'email'}
                                        multiline={true}
                                        onChangeText={(text) => {
                                            email = text;
                                            }}
                                />   
                            </View>
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center',flex:1}}>
                                 <Image source={require('../../imgs/modify/ic_modify_infor.png')} 
                                        style={{width:18,height:18,marginLeft:13}}/>
                                 <Text style={{fontSize:12,color:'#777',marginLeft:8}}>简介</Text>
                                 <TextInput 
                                        style={{height:40,fontSize: 15,textAlign: 'left',textAlignVertical:'center',flex:1}}
                                        placeholderTextColor="#aaaaaa"
                                        underlineColorAndroid="transparent"
                                        numberOfLines={1}
                                        ref={'infor'}
                                        multiline={true}
                                        onChangeText={(text) => {
                                            infor = text;
                                            }}
                                />   
                            </View>
                </View>
                <Text style={{marginLeft:13,marginTop:13,color:'#777',fontSize:13}}>私人信息</Text>
                <View style={{marginTop:13,backgroundColor:'white'}}>
                      <View style={{flexDirection:'row',height:45,alignItems:'center',flex:1}}>
                                 <Image source={require('../../imgs/modify/ic_modify_tel.png')} 
                                        style={{width:18,height:18,marginLeft:13}}/>
                                 <Text style={{fontSize:12,color:'#777',marginLeft:8}}>电话</Text>
                                 <TextInput 
                                        style={{height:40,fontSize: 15,textAlign: 'left',textAlignVertical:'center',flex:1}}
                                        placeholderTextColor="#aaaaaa"
                                        underlineColorAndroid="transparent"
                                        numberOfLines={1}
                                        ref={'tel'}
                                        multiline={true}
                                        onChangeText={(text) => {
                                            tel = text;
                                            }}
                                />   
                            </View>
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center',flex:1}}>
                                 <Image source={require('../../imgs/modify/ic_modify_gender.png')} 
                                        style={{width:18,height:18,marginLeft:13}}/>
                                 <Text style={{fontSize:12,color:'#777',marginLeft:8}}>性别</Text>
                                 <TextInput 
                                        style={{height:40,fontSize: 15,textAlign: 'left',textAlignVertical:'center',flex:1}}
                                        placeholderTextColor="#aaaaaa"
                                        underlineColorAndroid="transparent"
                                        numberOfLines={1}
                                        ref={'gender'}
                                        multiline={true}
                                        onChangeText={(text) => {
                                            gender = text;
                                            }}
                                />   
                            </View>
                </View>
                <Text style={{marginLeft:13,marginTop:13,color:'#777',fontSize:13}}>账号关联</Text>
                <View style={{marginTop:13,backgroundColor:'white'}}>
                      <View style={{flexDirection:'row',height:45,alignItems:'center',flex:1}}>
                                 <Image source={require('../../imgs/modify/ic_modify_qq.png')} 
                                        style={{width:18,height:18,marginLeft:13}}/>
                                 <Text style={{fontSize:14,color:'#777',marginLeft:8,flex:1}}>QQ:88888888</Text>
                                 <TouchableOpacity style={{width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                                       <Text style={{fontSize:12,color:'#777'}}>解绑</Text>
                                 </TouchableOpacity>
                      </View>
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center',flex:1}}>
                               <Image source={require('../../imgs/modify/ic_modify_weixin.png')} 
                                        style={{width:18,height:18,marginLeft:13}}/>
                               <Text style={{fontSize:14,color:'#777',marginLeft:8,flex:1}}>微信:45667777</Text>
                               <TouchableOpacity style={{width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                                       <Text style={{fontSize:12,color:'#777'}}>解绑</Text>
                              </TouchableOpacity>  
                    </View>
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center',flex:1}}>
                               <Image source={require('../../imgs/modify/ic_modify_fb.png')} 
                                        style={{width:18,height:18,marginLeft:13}}/>
                               <Text style={{fontSize:14,color:'#777',marginLeft:8,flex:1}}>Facebook:jianggqqlmj</Text>
                               <TouchableOpacity style={{width:40,height:40,justifyContent:'center',alignItems:'center'}}>
                                       <Text style={{fontSize:12,color:'#777'}}>解绑</Text>
                              </TouchableOpacity>  
                    </View>
                </View>
                </ScrollView>
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
export default ModifyInformation;