/**
 * 商城主页
 */
'use strict';
import React, {Component} from 'react';
import{ 
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet,
} from 'react-native';
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
var {height, width} = Dimensions.get('window');

class Home extends Component {
   constructor(props) {
      super(props);
   }
  _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
  }
  render() {
        return (
              <IndicatorViewPager
                    style={{height:140}}
                    indicator={this._renderDotIndicator()}
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
             </IndicatorViewPager>
        );
    }
}
const styles=StyleSheet.create({
});
export default Home;