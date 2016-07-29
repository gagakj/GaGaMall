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

import ScrollableTabView from 'react-native-scrollable-tab-view';
import GaGaTabBar from '../component/GaGaTabBar';

class AppMain extends Component {
    constructor(props) {
        super(props);
        this.state={
           tabNames:['主页','订单','购物车','我的'],
           tabIconNames: ['ios-home', 'ios-bookmark', 'ios-cart', 'ios-person']
        };
    }
    
    render() {
        let tabNames = this.state.tabNames;
		let tabIconNames = this.state.tabIconNames;
        return (
           <ScrollableTabView
				renderTabBar={() => <GaGaTabBar tabNames={tabNames} tabIconNames={tabIconNames}/> }
				tabBarPosition='bottom'>
				<View style={styles.content} tabLabel='home'>
					<Text>#1</Text>
				</View>
				<View style={styles.content} tabLabel='order'>
					<Text>#2</Text>
				</View>
				<View style={styles.content} tabLabel='cart'>
					<Text>#3</Text>
				</View>
				<View style={styles.content} tabLabel='center'>
					<Text>#4</Text>
				</View>
			</ScrollableTabView>
        );
    }
}
const styles=StyleSheet.create({
   content: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#EBEBEB',
		flex: 1
	}
});
export default AppMain;