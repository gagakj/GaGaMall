/**
 * 个人中心封装的Item布局
 */
'use strict';
import React, {PropTypes} from 'react';
import{ 
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';

const CenterItem = ({ onPress, title, icon}) => (
  <TouchableOpacity style={styles.wrap_style} onPress={onPress}>
     <View style={{flexDirection:'row'}}>
        <View style={styles.item_view}><Image style={styles.item_img} source={icon}/></View>
        <View style={styles.item_view}><Text style={{marginLeft:8}}>{title}</Text></View>
        <View style={styles.item_arrow_view}><Image source={require('../imgs/ic_center_right_arrow.png')} style={{width:12,height:18}}/></View>
     </View>
  </TouchableOpacity>
);
const styles=StyleSheet.create({
    wrap_style:{
       height:45,
       backgroundColor:'white',
    },
    item_img:{
       width:25,
       height:25,
       marginLeft:10,
    },
    item_view:{
       height:45,
       justifyContent:'center',
    },
    item_arrow_view:{
       height:45,
       justifyContent:'center',
       flex:1,
       alignItems:'flex-end',
       marginRight:8
    }
});
export default CenterItem;