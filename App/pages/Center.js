'use strict';
import React, {Component} from 'react';
import{ 
    View,
    Text,
    TouchableOpacity,
    Image,
    InteractionManager,
    Dimensions,
    StyleSheet,
    ToastAndroid,
} from 'react-native';

import Setting from './Setting';
import CenterItem from '../component/CenterItem';

var {height,width} =  Dimensions.get('window');

class Center extends Component {
    constructor(props) {
        super(props);
        this.settingButtonAction=this.settingButtonAction.bind(this);
        this.itemActionIndex=this.itemActionIndex.bind(this);
    }
    //设置按钮
    settingButtonAction(){
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
        navigator.push({
          component: Setting,
          name: 'Setting'
        });
      });
    }
    //判断当前点击了那个按钮
    itemActionIndex(position){
        ToastAndroid.show('点击了第'+position+'项',ToastAndroid.SHORT);
        if(position === 0){
           
        }
    }
    render() {
        return (
             <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
                <View style={{height:45,backgroundColor:'black',flexDirection:'row'}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>我的</Text>   
                    </View>
                    <TouchableOpacity onPress={() => {this.settingButtonAction()}} style={{marginRight:10,justifyContent:'center'}}>
                       <Image 
                          style={{width:24,height:22}}
                          source={require('../imgs/ic_center_setting.png')}
                       />
                    </TouchableOpacity>  
                </View>

                <View style={{backgroundColor:'white'}}>
                    <View style={{flexDirection:'row',height:100}}>
                       <Image  style={{width:70,height:70,marginLeft:10,marginTop:15}} source={require('../imgs/ic_center_icon.png')}/>
                       
                       <View style={{flexDirection:'column',justifyContent:'center',marginLeft:10}}>
                          <Text>Julia Stone</Text>
                          <View style={{flexDirection:'row'}}>
                             <Text style={{color:'#ddd'}}>余额:</Text>
                             <Text style={{color:'#ddd'}}>¥2000</Text>
                          </View>
                       </View>
                       //编辑按钮
                       <TouchableOpacity>
                          
                       </TouchableOpacity>
                    </View> 
                </View>

                <View style={styles.top_line}></View>
                <CenterItem title='充值' icon={require('../imgs/ic_center_chongzhi.png')} onPress={()=>this.itemActionIndex(0)}/>
                <View style={styles.top_line}></View>

                <View style={[styles.top_line,{marginTop:10}]}></View>
                <CenterItem 
                   title='地址管理' 
                   icon={require('../imgs/ic_center_address.png')} 
                   onPress={()=>this.itemActionIndex(1)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                <CenterItem 
                   title='信用卡管理' 
                   icon={require('../imgs/ic_center_card.png')} 
                   onPress={()=>this.itemActionIndex(2)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                <CenterItem 
                   title='收藏' 
                   icon={require('../imgs/ic_center_collect.png')} 
                   onPress={()=>this.itemActionIndex(3)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                <CenterItem 
                   title='商家合作' 
                   icon={require('../imgs/ic_center_hezuo.png')} 
                   onPress={()=>this.itemActionIndex(4)}/>
                <View style={[styles.top_line,styles.center_line]}></View>
                
                <View style={[styles.top_line,{marginTop:10}]}></View>
                <CenterItem 
                   title='更多' 
                   icon={require('../imgs/ic_center_more.png')} 
                   onPress={()=>this.itemActionIndex(4)}/>
                <View style={styles.top_line}></View>

                <TouchableOpacity style={{height:45,width:width,backgroundColor:'white',marginTop:10,justifyContent:'center',}}>
                    <Text style={{alignSelf:'center'}}>客服电话:0513-88888888</Text>
                </TouchableOpacity>
             </View>
        );
    }
}
const styles=StyleSheet.create({
    top_line:{
        width:width,
        height:1,
        backgroundColor:'#ccc'
    },
    center_line:{
        marginLeft:8,
        marginRight:8,
    }
});
export default Center;