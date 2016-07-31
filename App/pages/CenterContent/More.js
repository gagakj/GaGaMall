'use strict';
import React, {Component} from 'react';
import{ 
    View,
    Text,
    BackAndroid,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import { NaviGoBack } from '../../utils/CommonUtils';
class More extends Component {
  constructor(props) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);    
  }
  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  render() {
        return (
             <View style={{backgroundColor:'white',flex:1}}>
                <View style={{height:45,backgroundColor:'black',flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{marginLeft:10,justifyContent:'center'}}>
                       <Image 
                          style={{width:13,height:20}}
                          source={require('../../imgs/ic_center_back.png')}
                       />
                    </TouchableOpacity>  
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>更多</Text>   
                    </View>  
                </View>
                <View style={styles.top_layout}>
                    <Image source={require('../../imgs/ic_center_more_icon.png')} style={{width:100,height:78}}/>
                    <Text style={{fontSize:15}}>管家先生V1.0</Text>
                </View>
                <TouchableOpacity style={styles.item_layout}>
                    <Text style={{marginLeft:10}}>检查更新</Text>   
                </TouchableOpacity>
                <Image source={require('../../imgs/ic_short_bar.png')} style={styles.short_line}/>
                <TouchableOpacity style={styles.item_layout}>
                    <Text style={{marginLeft:10}}>分享给好友</Text>   
                </TouchableOpacity>
                <Image source={require('../../imgs/ic_large_bar.png')}/>
             </View>
        );
    }
}
const styles=StyleSheet.create({
    short_line:{
        marginLeft:10,
    },
    top_layout:{
        height:226,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f5f5'
    },
    item_layout:{
        backgroundColor:'white',
        height:45,
        justifyContent:'center'
    }
});
export default More;