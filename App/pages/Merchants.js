/**
 * 商家详情
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
} from 'react-native';

import { NaviGoBack } from '../utils/CommonUtils';
import { toastShort } from '../utils/ToastUtil';
import ShortLine from '../component/ShortLine';

var {height, width} = Dimensions.get('window');

class Merchants extends React.Component {
  constructor(props) {
    super(props);
    this.buttonBackAction=this.buttonBackAction.bind(this);    
    this.buttonItemAction=this.buttonItemAction.bind(this);
    this.state={
       
      }
  } 
    //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  buttonItemAction(position){
      const {navigator} = this.props;
      if(position === 0){
          //评价
          toastShort('点击评价...');
      }else if(position === 1){
          //收藏
          toastShort('点击收藏...');
      }else if(position === 2){
          //分享
          toastShort('点击分享...');
      }else if(position === 3){
          //地点
          toastShort('点击地点...');
      }else if(position === 4){
          //拨打电话
          toastShort('点击拨打电话...');
      }else if(position === 5){
          //开始点餐
          toastShort('点击点餐...');
      }
  }
  //渲染商家基本信息布局
  renderStoreBaisc(){
     const {navigator,route} = this.props; 
     return (
       <View style={{height: 160,alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../imgs/store/ic_store_top_bg.png')} style={{width:width,height:160}}>
                <View style={{flexDirection:'row',marginLeft:24,height:68,alignItems:'center',marginTop:12}}>
                     <Image source={require('../imgs/store/merchants/ic_merchants_icon.png')} 
                            style={{width:68,height:68,borderRadius:34}}/>
                     <View style={{marginLeft:15}}>
                           <Text style={{color:'white',fontSize:16}}>四川川二娃</Text>
                           <Text style={{color:'white',fontSize:14,marginTop:5}}>川菜,中国菜</Text>
                           <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                                 <Image source={require('../imgs/store/merchants/ic_merchants_comment.png')}
                                        style={{width:14,height:14}}
                                        />
                                 <Text style={{color:'#eee',fontSize:13,marginLeft:5}}>59条评论</Text>
                           </View>
                           <View style={{flexDirection:'row',marginTop:5,alignItems:'center'}}>
                                 <Image source={require('../imgs/store/merchants/ic_merchants_time.png')}
                                        style={{width:14,height:14}}
                                        />
                                 <Text style={{color:'#eee',fontSize:13,marginLeft:5}}>10:00am-12:00pm</Text>
                           </View>
                           <View style={{flexDirection:'row',marginTop:5,alignItems:'center'}}>
                                 <Image source={require('../imgs/store/merchants/ic_merchants_peisong.png')}
                                        style={{width:14,height:14}}
                                        />
                                 <Text style={{color:'#eee',fontSize:13,marginLeft:5}}>5km之内免费</Text>
                           </View>
                     </View>
                </View>
                <View style={{flex:1,justifyContent:'flex-end'}}>
                      <Text style={{color:'#fff',marginBottom:5,marginLeft:15,marginRight:15}}>公告信息:全场满200,八折畅享美食</Text>
                </View>
            </Image>
        </View>
     );
  }
  //渲染中间部分功能界面布局
  renderCenterBar(){
     return (
       <View style={{backgroundColor:'white'}}>
          <View style={{flexDirection:'row',height:45}}>
               <View style={{flex:1}}>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}}
                          onPress={()=>{this.buttonItemAction(0)}}>
                          <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Image source={require('../imgs/store/merchants/ic_merchants_comment_icon.png')} 
                                      style={{width:16,height:15}}/>
                                <Text style={{fontSize:12,color:'black',marginTop:3}}>评论</Text> 
                          </View>
                    </TouchableOpacity>
               </View>
                    <Image source={require('../imgs/store/ic_store_shu.png')} style={{height:30,width:1,marginTop:7}}/>
               <View style={{flex:1}}>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}}
                          onPress={()=>{this.buttonItemAction(1)}}>
                          <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Image source={require('../imgs/store/merchants/ic_merchants_collect.png')} 
                                      style={{width:16,height:15}}/>
                                <Text style={{fontSize:12,color:'black',marginTop:3}}>收藏</Text> 
                          </View>
                    </TouchableOpacity>
               </View>
                    <Image source={require('../imgs/store/ic_store_shu.png')} style={{height:30,width:1,marginTop:7}}/>
               <View style={{flex:1}}>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}}
                          onPress={()=>{this.buttonItemAction(2)}}>
                          <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Image source={require('../imgs/store/merchants/ic_merchants_share.png')} 
                                      style={{width:15,height:17}}/>
                                <Text style={{fontSize:12,color:'black',marginTop:3}}>分享</Text> 
                          </View>
                    </TouchableOpacity>
               </View>
          </View>
          <Image source={require('../imgs/ic_center_line.png')}/>
          <TouchableOpacity onPress={()=>{this.buttonItemAction(3)}}>
               <View style={{flexDirection:'row',height:35,alignItems:'center',flex:1}}>
                    <Image source={require('../imgs/store/merchants/ic_merchants_location.png')} 
                           style={{width:14,height:18,marginLeft:15}}/>
                    <Text style={{color:'#000',fontSize:12,marginLeft:8}}>上海市徐汇区徐家汇123号</Text>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <Image source={require('../imgs/ic_center_right_arrow.png')} 
                           style={{width:12,height:18,marginRight:15}}/>
                    </View>       
               </View>
          </TouchableOpacity>
          <ShortLine/>
          <TouchableOpacity onPress={()=>{this.buttonItemAction(4)}}>
               <View style={{flexDirection:'row',height:35,alignItems:'center',flex:1}}>
                    <Image source={require('../imgs/store/merchants/ic_merchants_phone.png')} 
                           style={{width:14,height:18,marginLeft:15}}/>
                    <Text style={{color:'#000',fontSize:12,marginLeft:8}}>+(86)13800138000</Text>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <Image source={require('../imgs/ic_center_right_arrow.png')} 
                           style={{width:12,height:18,marginRight:15}}/>
                    </View>   
               </View>
          </TouchableOpacity>
          <Image source={require('../imgs/ic_center_line.png')}/>
          <View style={{height:45,flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{this.buttonItemAction(5)}} style={styles.share_img}> 
                      <Text style={styles.share_btn_tv}>开始点餐</Text>
                </TouchableOpacity>
          </View> 
       </View>
     );
  }

  render() {
    return (
       <View style={{backgroundColor:'#f5f5f5',flex:1}}>
          <View style={{height:48,backgroundColor:'black',flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={() => {this.buttonBackAction()}} 
                                  style={{width:48,height:48,alignItems:'center',justifyContent:'center'}}>
                    <Image 
                          style={{width:13,height:20}}
                          source={require('../imgs/ic_center_back.png')}
                     />
                </TouchableOpacity>  
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>商家详情</Text>   
                </View>  
                <View style={{height:48,width:48}}/>
          </View>
          {this.renderStoreBaisc()}
          {this.renderCenterBar()}
          
      </View>
    );
  }
}
let styles = StyleSheet.create({
     share_img:{
        width:260,
        height:35,
        backgroundColor:'red',
        justifyContent:'center',
    },
    share_btn_tv:{
        color:'white',
        alignSelf:'center',
        backgroundColor:'#00000000'
    }
});
export default Merchants;