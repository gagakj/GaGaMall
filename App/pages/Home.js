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
const BANNER_IMGS = [  
    require('../imgs/home/1.jpg'),  
    require('../imgs/home/2.jpg'),  
    require('../imgs/home/3.jpg'),  
    require('../imgs/home/4.jpg')  
];  
const CENTER_IMGS = [
    require('../imgs/home/img_1.png'),  
    require('../imgs/home/img_2.png'),  
    require('../imgs/home/img_3.png'),  
    require('../imgs/home/img_4.png')  
];
class Home extends Component {
   constructor(props) {
      super(props);
    }
  _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
  }
  render() {
        return (
           <View style={{backgroundColor:'#fff',flex:1}}>
              <View style={{height:45,backgroundColor:'black',flexDirection:'row'}}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('../imgs/ic_center_more_icon.png')} style={{width:30,height:30}}/>
                </View>  
              </View>
              <IndicatorViewPager
                    style={{height:140}}
                    indicator={this._renderDotIndicator()}
                     >
                    <View><Image source={BANNER_IMGS[0]}/></View>
                    <View><Image source={BANNER_IMGS[1]}/></View>
                    <View><Image source={BANNER_IMGS[2]}/></View>
                    <View><Image source={BANNER_IMGS[3]}/></View>
             </IndicatorViewPager>
             <View style={{flexDirection:'row',marginTop:8}}>
                 <View style={{flex:1,marginLeft:8}}><Image source={CENTER_IMGS[0]} style={{width:80,height:100}}/></View>
                 <View style={{flex:1}}><Image source={CENTER_IMGS[1]} style={{width:80,height:100}}/></View>
                 <View style={{flex:1}}><Image source={CENTER_IMGS[2]} style={{width:80,height:100}}/></View>
                 <View style={{flex:1}}><Image source={CENTER_IMGS[3]} style={{width:80,height:100}}/></View>
             </View>
           </View>         
        );
    }
}
const styles=StyleSheet.create({
});
export default Home;