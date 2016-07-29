/**
 * 商城主框架界面
 */
'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {IndicatorViewPager,PagerTabIndicator} from 'rn-viewpager';
class AppMain extends Component {
    constructor(props) {
        super(props);
        this.state={
        };
    }
    _renderTabIndicator() {
        let tabs = [{
                text: '主页',
                iconSource: require('../imgs/ic_tab_home.png'),
                selectedIconSource: require('../imgs/ic_tab_home_press.png'),
            },{
                text: '订单',
                iconSource: require('../imgs/ic_tab_order.png'),
                selectedIconSource: require('../imgs/ic_tab_order_press.png'),
            },{
                text: '购物车',
                iconSource: require('../imgs/ic_tab_cart.png'),
                selectedIconSource: require('../imgs/ic_tab_cart_press.png'),
            },{
                text: '我的',
                iconSource: require('../imgs/ic_tab_center.png'),
                selectedIconSource: require('../imgs/ic_tab_center_press.png'),  
            }
            ];
        return <PagerTabIndicator 
            tabs={tabs} 
            iconStyle={styles.iconStyle} 
            selectedIconStyle={styles.iconStyle}
            textStyle={styles.textStyle}
            selectedTextStyle={styles.selectedTextStyle}
            />;
    }
    render() {
        return (
        <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{flex:1}}
                    indicator={this._renderTabIndicator()}
                    >
                    <View style={{backgroundColor:'cadetblue'}}>
                        <Text>page one</Text>
                    </View>
                    <View style={{backgroundColor:'cornflowerblue'}}>
                        <Text>page two</Text>
                    </View>
                    <View style={{backgroundColor:'#1AA094'}}>
                        <Text>page three</Text>
                    </View>
                    <View style={{backgroundColor:'#ddd'}}>
                        <Text>page four</Text>
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }
}
const styles=StyleSheet.create({
   iconStyle:{
       width:30,
       height:30,
   },
   textStyle:{
       color:'#999',
   },
   selectedTextStyle:{
       color:'black',
   }
});
export default AppMain;