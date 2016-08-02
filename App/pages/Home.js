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
    TouchableOpacity,
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
      this.centerItemAction=this.centerItemAction.bind(this);
    }
  centerItemAction(position){
      if(position === 0){
          
      }else if(position === 1){

      }else if(position === 2){
          
      }else if(position === 3){
          
      }
  }  
  _renderDotIndicator() {
        return <PagerDotIndicator pageCount={4} />;
  }
  render() {
        return (
           <View style={{backgroundColor:'#f5f5f5',flex:1}}>
              <View style={{height:45,backgroundColor:'black',flexDirection:'row'}}>
                <View style={{justifyContent:'flex-start',flexDirection:'row',alignItems:'center',flex:1}}>
                     <Image source={require('../imgs/home/ic_home_top_location.png')} 
                            style={{width:20,height:26,marginLeft:8}}/>
                     <Text style={{color:'white',fontSize:13,marginLeft:3}}>定位中</Text>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('../imgs/home/ic_home_top_icon.png')} style={{width:32,height:25}}/>
                </View>  
                <View style={{justifyContent:'flex-end',alignItems:'center',flex:1,flexDirection:'row'}}>
                    <Image source={require('../imgs/home/ic_home_top_search.png')} 
                           style={{width:24,height:24,marginRight:8,alignItems:'center'}}/>
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

             <View style={{marginTop:8}}>
                <View style={{flexDirection:'row',backgroundColor:'white',paddingTop:10,paddingBottom:10}}>
                 <View style={{flex:1,marginLeft:8}}>
                       <TouchableOpacity onPress={()=>{this.centerItemAction(0)}}>
                       <Image source={CENTER_IMGS[0]} style={{width:80,height:100}}>
                            <View style={styles.center_item_wrap}>
                                  <Text style={styles.center_item_tv}>餐厅</Text>
                            </View>
                       </Image>
                       </TouchableOpacity>
                 </View>
                 <View style={{flex:1}}>
                       <TouchableOpacity onPress={()=>{this.centerItemAction(1)}}>
                       <Image source={CENTER_IMGS[1]} style={{width:80,height:100}}>
                            <View style={styles.center_item_wrap}>
                                  <Text style={styles.center_item_tv}>奶茶</Text>
                            </View> 
                       </Image>
                       </TouchableOpacity>
                 </View>
                 <View style={{flex:1}}>
                       <TouchableOpacity onPress={()=>{this.centerItemAction(2)}}>
                       <Image source={CENTER_IMGS[2]} style={{width:80,height:100}}>
                            <View style={styles.center_item_wrap}>
                                  <Text style={styles.center_item_tv}>奶茶甜品</Text>
                            </View>
                       </Image>
                       </TouchableOpacity>
                 </View>
                 <View style={{flex:1}}>
                       <TouchableOpacity onPress={()=>{this.centerItemAction(3)}}>
                       <Image source={CENTER_IMGS[3]} style={{width:80,height:100}}>
                            <View style={styles.center_item_wrap}>
                                  <Text style={styles.center_item_tv}>新品推荐</Text>
                            </View>
                       </Image>
                       </TouchableOpacity>
                 </View>
                </View>   
             </View>
             <View style={{marginTop:8,backgroundColor:'white'}}>
                  <View style={{height:45,justifyContent:'center',alignItems:'center'}}><Text>推荐活动</Text></View>
             </View>
           </View>         
        );
    }
}
const styles=StyleSheet.create({
    center_item_wrap:{
        alignSelf:'center',
        alignItems:'center',
        flex:1,
        justifyContent:'flex-end'
    },
    center_item_tv:{
        fontSize:14,
        marginBottom:8
    }
});
export default Home;