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
  ScrollView,
} from 'react-native';

import { NaviGoBack } from '../utils/CommonUtils';
import ShortLineTwo from '../component/ShortLineTwo';
var {height, width} = Dimensions.get('window');

class OrderDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    }
  } 
  componentDidMount() {

  }
  
  render() {
    const {navigator,route} = this.props;
    return (
       <View style={{backgroundColor:'#f5f5f5',flex:1}}>
           <View style={{flex:1}}>
                <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                     <View style={{height:35,justifyContent:'center'}}>
                           <Text style={{color:'#777',marginLeft:8}}>订单详情</Text>
                     </View>
                     <View style={{flexDirection:'row',height:70,backgroundColor:'white',alignItems:'center'}}>
                           <Image source={require('../imgs/order/ic_order_shop_icon.png')} style={{width:40,height:40,marginLeft:10}}/>
                           <Text style={{fontSize:15,marginLeft:10,color:'black'}}>四川菜馆</Text>
                           <View style={{alignItems:'flex-end',flex:1,marginRight:8}}>
                                <Image source={require('../imgs/order/ic_order_arrow_right.png')} style={styles.item_view_icon}/>
                           </View>
                     </View>
                     <ShortLineTwo/>
                     <View style={{flexDirection:'row',backgroundColor:'white',height:35,alignItems:'center'}}>
                           <Text style={{marginLeft:10,flex:5}}>干锅千叶豆腐</Text>
                           <Text style={{color:'red',fontSize:14,flex:1}}>x1</Text>
                           <View style={{flex:2,alignItems:'flex-end',marginRight:10}}>
                                <Text style={{color:'red',fontSize:14}}>¥18</Text>
                           </View>
                     </View>
                     <View style={{flexDirection:'row',backgroundColor:'white',height:35,alignItems:'center'}}>
                           <Text style={{marginLeft:10,flex:5}}>米饭</Text>
                           <Text style={{color:'red',fontSize:14,flex:1}}>x2</Text>
                           <View style={{flex:2,alignItems:'flex-end',marginRight:10}}>
                                <Text style={{color:'red',fontSize:14}}>¥20</Text>
                           </View>
                     </View>
                     <ShortLineTwo/>
                     <View style={{flexDirection:'row',backgroundColor:'white',height:35,alignItems:'center'}}>
                           <Text style={{marginLeft:10}}>消费税</Text>
                           <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                                <Text style={{fontSize:14}}>¥2</Text>
                           </View>
                     </View>
                     <View style={{flexDirection:'row',backgroundColor:'white',height:35,alignItems:'center'}}>
                           <Text style={{marginLeft:10}}>运费</Text>
                           <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                                <Text style={{fontSize:14}}>¥25</Text>
                           </View>
                     </View>
                     <View style={{flexDirection:'row',backgroundColor:'white',height:35,alignItems:'center'}}>
                           <Text style={{marginLeft:10}}>安全费</Text>
                           <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                                <Text style={{fontSize:14}}>¥15</Text>
                           </View>
                     </View>
                     <ShortLineTwo/>
                     <View style={{flexDirection:'row',backgroundColor:'white',height:35,alignItems:'center'}}>
                           <Text style={{marginLeft:10}}>总计¥80 - 优惠¥20</Text>
                           <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                                <Text style={{fontSize:14,color:'red'}}>总计¥60</Text>
                           </View>
                     </View>
                     <View style={{height:35,justifyContent:'center'}}>
                           <Text style={{color:'#777',marginLeft:8}}>其他信息</Text>
                     </View>
                     <View style={{flexDirection:'row',backgroundColor:'white',height:35,alignItems:'center'}}>
                           <Text style={{marginLeft:10}}>期望时间</Text>
                           <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                                <Text style={{fontSize:14}}>2016-8-5 14:30:12</Text>
                           </View>
                     </View>
                     <View style={{flexDirection:'row',backgroundColor:'white',height:35,alignItems:'center'}}>
                           <Text style={{marginLeft:10}}>配送地址</Text>
                           <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                                <Text style={{fontSize:14}}>江苏省开发区星湖101大厦10楼101室</Text>
                           </View>
                     </View>
                     <View style={{flexDirection:'row',backgroundColor:'white',height:35,alignItems:'center'}}>
                           <Text style={{marginLeft:10}}>配送服务</Text>
                           <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                                <Text style={{fontSize:14}}>商家配送</Text>
                           </View>
                     </View>
                     <View style={{flexDirection:'row',backgroundColor:'white',height:35,alignItems:'center'}}>
                           <Text style={{marginLeft:10}}>订单编号</Text>
                           <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                                <Text style={{fontSize:14}}>201608051230121001</Text>
                           </View>
                     </View>
                     <View style={{flexDirection:'row',backgroundColor:'white',height:35,alignItems:'center'}}>
                           <Text style={{marginLeft:10}}>订单时间</Text>
                           <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                                <Text style={{fontSize:14}}>2016-8-5 12:30:12</Text>
                           </View>
                     </View>
                     <View style={{flexDirection:'row',backgroundColor:'white',height:35,alignItems:'center',marginBottom:8}}>
                           <Text style={{marginLeft:10}}>支付方式</Text>
                           <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                                <Text style={{fontSize:14}}>在线支付</Text>
                           </View>
                     </View>
                </ScrollView>
           </View>
           <View style={{justifyContent:'flex-end'}}>
                <TouchableOpacity style={styles.item_layout}>
                       <Text style={{color:'red',fontSize:14}}>再来一单</Text>
                </TouchableOpacity>
           </View>
      </View>
    );
  }
}
let styles = StyleSheet.create({
   item_layout:{
        backgroundColor:'white',
        height:45,
        alignItems:'center',
        justifyContent:'center'
    },
    item_view_icon:{
        width:10,
        height:15,
    },
});
export default OrderDetails