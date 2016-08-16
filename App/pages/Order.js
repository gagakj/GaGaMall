'use strict';
import React, {Component} from 'react';
import{ 
    View,
    Text,
    ListView,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
    InteractionManager
} from 'react-native';
const ORDER_DATA={
    "api":"GetOrderHistory",
    "v":"1.0",
    "code":"0",
    "msg":"success",
    "data":[{
        "id":1,
        "shopName":"四川菜馆",
        "orderStauts":1,
        "icon":"",
        "title":'干锅千叶豆腐等2件商品',
        "time":"2016-5-12 12:23",
        "price":29
    },{
        "id":1,
        "shopName":"聚星楼",
        "orderStauts":1,
        "icon":"",
        "title":'超级大鸡排等2件商品',
        "time":"2016-5-10 11:23",
        "price":34
    },{
        "id":1,
        "shopName":"湘菜馆",
        "orderStauts":0,
        "icon":"",
        "title":'土豆烧鸡块等3件商品',
        "time":"2016-5-9 9:00",
        "price":19
    },{
        "id":1,
        "shopName":"重庆烧鸡公",
        "orderStauts":1,
        "icon":"",
        "title":'烧鸡公等4件商品',
        "time":"2016-5-2 5:23",
        "price":78
    }]
};
import OrderSingle from './OrderSingle';

var {height,width} = Dimensions.get('window');

class Order extends Component {

    constructor(props) {
        super(props);
        this.onPressItem=this.onPressItem.bind(this);
        this.renderItem = this.renderItem.bind(this); 
        this.state={
         dataSource: new ListView.DataSource({
           rowHasChanged: (row1, row2) => row1 !== row2,
         }),
         orders :ORDER_DATA.data,
      }
    }

  onEndReached(typeId) {
     
  }
  //点击列表每一项响应按钮
  onPressItem(order){
     const {navigator} = this.props;
     InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: OrderSingle,
              name: 'OrderSingle',
              order
            });
          });
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
  renderItem(order) {
    return (
        <View>
        <View style={styles.item_view_zhanwei}></View>
        <TouchableOpacity onPress={()=>{this.onPressItem(order)}}>
        <View style={{backgroundColor:'white'}}>
             <View style={styles.item_view_center}>
                  <Text style={{color:'black'}}>{order.shopName}</Text>
                  <Image source={require('../imgs/order/ic_order_arrow_right.png')} style={styles.item_view_icon}/>
                  <View style={styles.item_view_center_status}>
                       <Image source={require('../imgs/order/ic_order_status.png')} 
                              style={styles.item_view_center_status_tv_img}>
                           <Text style={styles.item_view_center_status_tv}>{order.orderStauts === 1 ? '订单完成' : '订单取消'}</Text>
                       </Image>
                  </View>
             </View>
             <Image source={require('../imgs/order/ic_order_heng.png')} style={{width:(width-20),marginLeft:10,marginRight:10}}/>
             <View style={styles.item_view_center_msg}>
                   <Image source={require('../imgs/order/ic_order_shop_icon.png')} style={styles.item_view_center_icon}/>
                   <View style={styles.item_view_center_title_img}>
                         <Text style={styles.item_view_center_title}>{order.title}</Text>
                         <Text style={styles.item_view_center_time}>{order.time}</Text>
                   </View>
             </View>
             <Image source={require('../imgs/order/ic_order_heng_shi.png')} style={{width:(width-20),marginLeft:10,marginRight:10}}/>
             <View style={styles.item_view_bottom}>
                   <View style={styles.item_view_bottom_price_v}>
                         <Text style={styles.item_view_bottom_price}>¥{order.price}</Text>
                    </View>
                   <Image source={require('../imgs/order/ic_order_shu.png')} style={{height:40}}/>
                   <View style={styles.item_view_bottom_again_v}>
                         <Text style={styles.item_view_bottom_again}>再来一单</Text>
                   </View>
             </View>
        </View>
        </TouchableOpacity>
        </View>
    );
  }
    render() {
        return (
             <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <View style={{height:48,backgroundColor:'black',flexDirection:'column'}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>订单</Text>   
                    </View>  
                </View>
                <View style={{flex:1}}>
                   {this.renderContent(this.state.dataSource.cloneWithRows(
                         this.state.orders === undefined ? [] : this.state.orders))}
                </View> 
             </View>
        );
    }
}
const styles=StyleSheet.create({
    item_view_zhanwei:{
        backgroundColor:'#f5f5f5',
        height:8
    },
    item_view_center:{
        flexDirection:'row',
        height:40,
        marginLeft:10,
        alignItems:'center'
    },
    item_view_icon:{
        width:10,
        height:15,
        marginLeft:5
    },
    item_view_center_status:{
        alignItems:'flex-end',
        flex:1,
        marginRight:10
    },
    item_view_center_status_tv_img:{
        height:20,
        width:62,
        justifyContent:'center',
        alignItems:"center"
    },
    item_view_center_status_tv:{
        color:'white',
        fontSize:10,
        backgroundColor:'#00000000'
    },
    item_view_center_msg:{
        flexDirection:'row',
        height:90,
        alignItems:'center'
    },
    item_view_center_icon:{
        width:50,
        height:50,
        marginLeft:10
    },
    item_view_center_title_img:{
        flexDirection:'column',
        marginLeft:10
    },
    item_view_center_title:{
        fontSize:14,
        color:'black'
    },
    item_view_center_time:{
        color:'#777',
        fontSize:13
    },
    item_view_bottom:{
        flexDirection:'row',
        height:40
    },
    item_view_bottom_price_v:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    item_view_bottom_price:{
        color:'red',
        fontSize:14
    },
    item_view_bottom_again_v:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    item_view_bottom_again:{
        fontSize:14,
        color:'black'
    }
});
export default Order;