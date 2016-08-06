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
class ShareToFriend extends Component {
  constructor(props) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);    
      this.buttonOtherShare=this.buttonOtherShare.bind(this);
  }
  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  //其他分享方式
  buttonOtherShare(){
      
  }
  render() {
        return (
             <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <View style={{height:45,backgroundColor:'black',flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{marginLeft:10,justifyContent:'center'}}>
                       <Image 
                          style={{width:13,height:20}}
                          source={require('../../imgs/ic_center_back.png')}
                       />
                    </TouchableOpacity>  
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>分享给好友</Text>   
                    </View>  
                </View>
                <View style={styles.content_style}>
                     <Image source={require('../../imgs/ic_center_qrcode.jpg')} style={styles.qrcode_img}/>
                     <Text style={{marginTop:8}}>扫描直接下载嘎嘎商城App</Text>
                     <TouchableOpacity style={{marginTop:70}} onPress={()=>{this.buttonOtherShare()}}>
                         <Image source={require('../../imgs/ic_center_other_share.png')} style={styles.share_img}>
                              <Text style={styles.share_btn_tv}>其他分享方式</Text>
                         </Image>
                     </TouchableOpacity>
                </View>
             </View>
        );
    }
}
const styles=StyleSheet.create({
    top_layout:{
        height:226,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f5f5'
    },
    content_style:{
        alignItems:'center',
        marginTop:40,
    },
    qrcode_img:{
        width:120,
        height:120,
    },
    share_img:{
        width:260,
        height:35,
        justifyContent:'center',
    },
    share_btn_tv:{
        color:'white',
        alignSelf:'center',
        backgroundColor:'#00000000'
    }
});

export default ShareToFriend;