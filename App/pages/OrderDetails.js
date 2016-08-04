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
       <View style={{backgroundColor:'#fff',flex:1}}>
           <Text>订单详情</Text>
      </View>
    );
  }
}
let styles = StyleSheet.create({

});
export default OrderDetails