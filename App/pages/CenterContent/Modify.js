'use strict';
import React, {Component} from 'react';
import{ 
    View,
    Text,
    BackAndroid,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
} from 'react-native';
import { NaviGoBack } from '../../utils/CommonUtils';
import ShortLineTwo from '../../component/ShortLineTwo';

var firstname = '';
var name = '';
var city = '';
var details = '';
var phone = '';
var postcode = '';

class Modify extends Component {
  constructor(props) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);    
      this.saveAddress=this.saveAddress.bind(this);
  }
  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  //保存地址
  saveAddress(){
       
  }

  render() {
        return (
             <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <View style={{height:48,backgroundColor:'black',flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => {this.buttonBackAction()}} 
                                      style={{width:48,height:48,justifyContent:'center',alignItems:'center'}}>
                       <Image 
                          style={{width:13,height:20}}
                          source={require('../../imgs/ic_center_back.png')}
                       />
                    </TouchableOpacity>  
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>地址添加</Text>   
                    </View>  
                    <TouchableOpacity onPress={()=>{this.saveAddress()}}
                                      style={{width:48,height:48,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white',fontSize:14}}>保存</Text>
                    </TouchableOpacity>
                </View>
                 <View style={{backgroundColor:'white',marginTop:13}}>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <Text style={{color:'black',marginLeft:23}}>姓名</Text>
                          <TextInput 
                            style={{color:'#777',marginRight:13,height:40,fontSize: 15,textAlign: 'right',textAlignVertical:'center',flex:1}}
                            placeholder="姓名"
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
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <Text style={{color:'black',marginLeft:23}}>姓名</Text>
                          <TextInput 
                            style={{color:'#777',marginRight:13,height:40,fontSize: 15,textAlign: 'right',textAlignVertical:'center',flex:1}}
                            placeholder="姓名"
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
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <Text style={{color:'black',marginLeft:23}}>姓氏</Text>
                          <TextInput 
                            style={{color:'#777',marginRight:13,height:40,fontSize: 15,textAlign: 'right',textAlignVertical:'center',flex:1}}
                            placeholder="姓氏"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'firstname'}
                            multiline={true}
                            onChangeText={(text) => {
                               firstname = text;
                            }}
                      />
                    </View> 
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <Text style={{color:'black',marginLeft:23}}>城市</Text>
                          <TextInput 
                            style={{color:'#777',marginRight:13,height:40,fontSize: 15,textAlign: 'right',textAlignVertical:'center',flex:1}}
                            placeholder="城市"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'city'}
                            multiline={true}
                            onChangeText={(text) => {
                               city = text;
                            }}
                      />
                    </View> 
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <Text style={{color:'black',marginLeft:23}}>地址</Text>
                          <TextInput 
                            style={{color:'#777',marginRight:13,height:40,fontSize: 15,textAlign: 'right',textAlignVertical:'center',flex:1}}
                            placeholder="地址"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'details'}
                            multiline={true}
                            onChangeText={(text) => {
                               details = text;
                            }}
                      />
                    </View> 
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <Text style={{color:'black',marginLeft:23}}>电话</Text>
                          <TextInput 
                            style={{color:'#777',marginRight:13,height:40,fontSize: 15,textAlign: 'right',textAlignVertical:'center',flex:1}}
                            placeholder="电话"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'phone'}
                            multiline={true}
                            onChangeText={(text) => {
                               phone = text;
                            }}
                      />
                    </View> 
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <Text style={{color:'black',marginLeft:23}}>邮编</Text>
                          <TextInput 
                            style={{color:'#777',marginRight:13,height:40,fontSize: 15,textAlign: 'right',textAlignVertical:'center',flex:1}}
                            placeholder="邮编"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'postcode'}
                            multiline={true}
                            onChangeText={(text) => {
                               postcode = text;
                            }}
                      />
                    </View> 
                </View>    
             </View>
        );
    }
}
const styles=StyleSheet.create({
    top_layout:{
        height:226,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f5f5'
    },
});

export default Modify;