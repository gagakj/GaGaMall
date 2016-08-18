/**
 * 评论
 */
'use strict';
import React, {Component} from 'react';
import{ 
    View,
    Text,
    BackAndroid,
    TouchableOpacity,
    Image,
    StyleSheet,
    ListView,
    ToastAndroid,
    InteractionManager,
} from 'react-native';

import { NaviGoBack } from '../utils/CommonUtils';

class Comment extends Component {
  constructor(props) {
      super(props);
      this.state={

      }
      this.buttonBackAction=this.buttonBackAction.bind(this);    
  }
  
  componentDidMount() {

  }

  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
 
  render() {
        return (
             <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <View style={{height:48,backgroundColor:'black',flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => {this.buttonBackAction()}} 
                                      style={{width:48,height:48,alignItems:'center',justifyContent:'center'}}>
                       <Image 
                          style={{width:13,height:20}}
                          source={require('../imgs/ic_center_back.png')}
                       />
                    </TouchableOpacity>  
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>评论</Text>   
                    </View>  
                    <TouchableOpacity style={{width:45,height:45,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white',fontSize:14}}>保存</Text>
                    </TouchableOpacity>
                </View>
                
             </View>
        );
    }
}
const styles=StyleSheet.create({
    
});

export default Comment;