/**
 * 问题报告-意见反馈
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
    InteractionManager,
    TextInput,
} from 'react-native';

import { NaviGoBack } from '../../utils/CommonUtils';

var content = '';
class FeebBack extends Component {
  constructor(props) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);   
      this.submiteFeedBack=this.submiteFeedBack.bind(this);
      this.selectFeedBack=this.selectFeedBack.bind(this);
      this._handleOnSelect=this._handleOnSelect.bind(this);
      this.state={
          selectData:"",
      }
  }

  _handleOnSelect (value) {
    this.setState({selectData:value})
  }
  
  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  selectFeedBack(){

  }
  //提交反馈
  submiteFeedBack(){

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
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>问题报告</Text>   
                    </View>  
                </View>
                <View style={{backgroundColor:'white',marginTop:10}}>
                     <View style={styles.fd_content_style}>
                           <View style={{justifyContent:'center'}}><Text style={{marginLeft:10}}>问题类型</Text></View>
                           <View style={styles.top_style}>
                                <TouchableOpacity style={{marginRight:10}} onPress={()=>{this.selectFeedBack()}}>
                                    <View style={{flexDirection:'row'}}>
                                          <Text>新需求建议</Text>
                                          <Image source={require('../../imgs/ic_center_feedback_arrow_down.png')}
                                           style={styles.arrow_style}
                                            />
                                    </View>
                                 </TouchableOpacity>
                           </View>
                     </View>
                     <Image source={require('../../imgs/ic_large_bar.png')}/>
                     <TextInput 
                            style={{ fontSize: 15, textAlignVertical: 'top' }}
                            placeholder="请写下您宝贵的意见或建议..."
                            placeholderTextColor="#aaaaaa"
                            underlineColorAndroid="transparent"
                            numberOfLines={8}
                            ref={'content'}
                            multiline={true}
                            autoFocus={true}
                            onChangeText={(text) => {
                               content = text;
                            }}
                      />
                </View>
                <View style={styles.content_style}>
                    <TouchableOpacity  onPress={()=>{this.submiteFeedBack()}}>
                         <Image source={require('../../imgs/ic_center_other_share.png')} style={styles.share_img}>
                              <Text style={styles.share_btn_tv}>提交反馈</Text>
                        </Image>
                    </TouchableOpacity>
                </View>
             </View>
        );
    }
}

const styles=StyleSheet.create({
    short_line:{
        marginLeft:10,
    },
    item_layout:{
        backgroundColor:'white',
        height:45,
        justifyContent:'center'
    },
    share_img:{
        width:260,
        height:35,
        justifyContent:'center',
    },
    share_btn_tv:{
        color:'white',
        alignSelf:'center'
    },
    content_style:{
        alignItems:'center',
        marginTop:10,
    },
    arrow_style:{
        width:15,
        height:15,
        marginLeft:2,
        marginTop:2
    },
    top_style:{
        alignItems:'flex-end',
        flex:1,
        justifyContent:'center'
    },
    fd_content_style:{
        height:40,
        flexDirection:'row'
    }
});
export default FeebBack;