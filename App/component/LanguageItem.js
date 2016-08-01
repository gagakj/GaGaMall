/**
 * 设置界面Item布局
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

const LanguageItem = ({ onPress, title, selected}) => (
  <View>  
  {selected ?
   <TouchableOpacity style={styles.wrap_style} onPress={onPress}>
     <View style={{flexDirection:'row'}}>
        <View style={styles.item_view}><Text style={{marginLeft:10,fontSize:13}}>{title}</Text></View>
        <View style={styles.item_arrow_view}>
            <Image source={require('../imgs/ic_center_lanuage_selected.png')} 
                   style={{width:25,height:25}}/>
        </View>
     </View>
    </TouchableOpacity> :
    <TouchableOpacity style={styles.wrap_style} onPress={onPress}>
     <View style={{flexDirection:'row'}}>
        <View style={styles.item_view}><Text style={{marginLeft:10,fontSize:13}}>{title}</Text></View>
        <View style={styles.item_arrow_view}>
            <Image source={require('../imgs/ic_center_lanuage.png')} 
                   style={{width:22,height:22}}/>
        </View>
     </View>
    </TouchableOpacity>
  }
 </View>
);
const styles=StyleSheet.create({
    wrap_style:{
       height:45,
       backgroundColor:'white',
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
       marginRight:10
    }
});

export default LanguageItem;