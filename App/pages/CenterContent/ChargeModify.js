/**
 * 信用卡添加或者修改
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
    ListView,
    ToastAndroid,
    InteractionManager,
    TextInput,
} from 'react-native';

import { NaviGoBack } from '../../utils/CommonUtils';
import { CHARGE_DATA } from '../../common/VirtualData';
import ShortLineTwo from '../../component/ShortLineTwo';

var name = '';
var cardNumber = '';
var month = '';
var year = '';
var securityCode = '';
var postcode = '';

class ChargeModify extends Component {
  constructor(props) {
      super(props);
      this.state={
         dataSource: new ListView.DataSource({
           rowHasChanged: (row1, row2) => row1 !== row2,
         }),
         chargeList : eval(CHARGE_DATA).data,
      }
      this.buttonBackAction=this.buttonBackAction.bind(this);    
      this.saveCharge=this.saveCharge.bind(this);
  }
  
  componentDidMount() {

  }

  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  saveCharge(){

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
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>信用卡维护</Text>   
                    </View>  
                    <TouchableOpacity style={{width:48,height:48,justifyContent:'center',alignItems:'center'}} onPress={()=>{this.saveCharge()}}>
                       <Text style={{color:'white',fontSize:14}}>保存</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',marginTop:13}}>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <Text style={{color:'black',marginLeft:23}}>姓名</Text>
                          <TextInput 
                            style={{color:'#777',marginRight:13,height:40,fontSize: 15,textAlign: 'right',textAlignVertical:'center',flex:1}}
                            placeholder="请输入姓名"
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
                          <Text style={{color:'black',marginLeft:23}}>卡号</Text>
                          <TextInput 
                            style={{color:'#777',marginRight:13,height:40,fontSize: 15,textAlign: 'right',textAlignVertical:'center',flex:1}}
                            placeholder="请输入卡号"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'cardNumber'}
                            multiline={true}
                            onChangeText={(text) => {
                               cardNumber = text;
                            }}
                      />
                    </View> 
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <Text style={{color:'black',marginLeft:23}}>月</Text>
                          <TextInput 
                            style={{color:'#777',marginRight:13,height:40,fontSize: 15,textAlign: 'right',textAlignVertical:'center',flex:1}}
                            placeholder="请输入月份"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'month'}
                            multiline={true}
                            onChangeText={(text) => {
                               month = text;
                            }}
                      />
                    </View> 
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <Text style={{color:'black',marginLeft:23}}>年</Text>
                          <TextInput 
                            style={{color:'#777',marginRight:13,height:40,fontSize: 15,textAlign: 'right',textAlignVertical:'center',flex:1}}
                            placeholder="请输入年份"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'year'}
                            multiline={true}
                            onChangeText={(text) => {
                               year = text;
                            }}
                      />
                    </View> 
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <Text style={{color:'black',marginLeft:23}}>安全码</Text>
                          <TextInput 
                            style={{color:'#777',marginRight:13,height:40,fontSize: 15,textAlign: 'right',textAlignVertical:'center',flex:1}}
                            placeholder="请输入安全码"
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={1}
                            ref={'securityCode'}
                            multiline={true}
                            onChangeText={(text) => {
                               securityCode = text;
                            }}
                      />
                    </View> 
                    <ShortLineTwo/>
                    <View style={{flexDirection:'row',height:45,alignItems:'center'}}>
                          <Text style={{color:'black',marginLeft:23}}>邮编</Text>
                          <TextInput 
                            style={{color:'#777',marginRight:13,height:40,fontSize: 15,textAlign: 'right',textAlignVertical:'center',flex:1}}
                            placeholder="请输入邮编"
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
    item_tv:{
        color:'#aaa',
        marginLeft:10
    },
    foot_item_view:{
        justifyContent:'center',
        alignItems:'flex-end',
        flex:1,
    },
    separator: {
       height: 1,
       backgroundColor: '#eee'
   }
});

export default ChargeModify;