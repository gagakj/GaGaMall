/**
 * 城市选择
 */
'use strict';
import React from 'react';
import {
  Dimensions,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListView,
} from 'react-native';

import { NaviGoBack } from '../utils/CommonUtils';
var {height, width} = Dimensions.get('window');
const CITY_DATA={
    "api":"GetSelectCity",
    "v":"1.0",
    "code":"0",
    "msg":"success",
    "data":[{
        "cityId":0,
        "cityName":"Oxford",
        "isBegin":true,
    },{
        "cityId":1,
        "cityName":"Birmingham",
        "isBegin":true,
    },{
        "cityId":2,
        "cityName":"Coventry",
        "isBegin":true,
    },{
        "cityId":3,
        "cityName":"London",
        "isBegin":false,
    }]
};
var CITY_IMGS=[
     require('../imgs/city/img_Oxford.png'),  
     require('../imgs/city/img_Birmingham.png'),  
     require('../imgs/city/img_Coventry.png'),  
     require('../imgs/city/img_London.png')
];

class City extends React.Component {
  constructor(props) {
    super(props);
    this.buttonBackAction=this.buttonBackAction.bind(this);    
    this.onPressItem=this.onPressItem.bind(this);
    this.renderItem = this.renderItem.bind(this); 
    this.state={
         dataSource: new ListView.DataSource({
           rowHasChanged: (row1, row2) => row1 !== row2,
         }),
         citys : eval(CITY_DATA).data,
      }
  } 
    //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  onEndReached(typeId) {
     
  }
  //点击列表每一项响应按钮
  onPressItem(city){
      
  }
  //进行渲染数据
  renderContent(dataSource) {
    return (
      <ListView
        initialListSize={1}
        dataSource={dataSource}
        renderRow={this.renderItem}
        style={{backgroundColor:'white',flex:1}}
        onEndReachedThreshold={10}
        enableEmptySections={true}
      />
    );
   }
  //渲染每一项的数据
  renderItem(city) {
    return (
      <TouchableOpacity onPress={()=>{this.onPressItem(city)}}>
          <View style={{justifyContent:'center'}}>
                <Image source={CITY_IMGS[city.cityId]} style={{width:width,height:140}}>
                       <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                             <Text style={{color:'white',fontSize:19}}>{city.cityName}</Text>
                             {city.isBegin?
                                null:<Text style={{color:'white',fontSize:18}}>coming soon...</Text>
                                }
                       </View>
                </Image>
          </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
       <View style={{backgroundColor:'#fff',flex:1}}>
          <View style={{height:48,backgroundColor:'black',flexDirection:'row'}}>
                <TouchableOpacity onPress={() => {this.buttonBackAction()}} 
                                  style={{width:48,height:48,alignItems:'center',justifyContent:'center'}}>
                    <Image 
                          style={{width:13,height:20}}
                          source={require('../imgs/ic_center_back.png')}
                     />
                </TouchableOpacity>  
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>城市选择</Text>   
                </View>  
                <View style={{height:48,width:48}}/>
          </View>
          <View style={{flex:1}}>
               {this.renderContent(this.state.dataSource.cloneWithRows(
                         this.state.citys === undefined ? [] : this.state.citys))}
          </View>
      </View>
    );
  }
}
let styles = StyleSheet.create({
   text_version:{
      color:'#ddd', 
      marginTop:8
   },
   text_right:{
      alignSelf:'center',
      alignItems:'center',
      flex:1,
      justifyContent:'flex-end'
   }
});
export default City;