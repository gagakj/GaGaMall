'use strict';
import React, {Component} from 'react';
import{ 
    View,
    Text,
    BackAndroid,
    TouchableOpacity,
    Image,
    StyleSheet,
    Modal,
    Dimensions,
    TouchableWithoutFeedback,
} from 'react-native';
import { NaviGoBack } from '../../utils/CommonUtils';
import { toastShort } from '../../utils/ToastUtil';
const shareIconWechat = require('../..//imgs/share_icon_wechat.png');
const shareIconMoments = require('../../imgs/share_icon_moments.png');

class ShareToFriend extends Component {
  constructor(props) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);    
      this.buttonOtherShare=this.buttonOtherShare.bind(this);
      this.state={
          isShareModal: false,
      }
  }
  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      if (this.state.isShareModal) {
          this.setState({
             isShareModal: false
         });
      return true;
     }
      return NaviGoBack(navigator);
  }
  //其他分享方式
  buttonOtherShare(){
      this.setState({isShareModal: true});
  }
  renderSpinner() {
    const { route } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.setState({
            isShareModal: false
          });
        }}
      >
        <View
          key={'spinner'}
          style={styles.spinner}
        >
          <View style={styles.spinnerContent}>
            <Text style={[styles.spinnerTitle, { fontSize: 20, color: 'black' }]}>
              分享到
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => {
                  WeChat.isWXAppInstalled()
                    .then((isInstalled) => {
                      if (isInstalled) {
                        WeChat.shareToSession({
                          title: 'React Native开发的嘎嘎商城哦~赶紧来体验吧...',
                          description: '分享自:嘎嘎商城-微信订阅号:codedev123',
                          thumbImage: 'http://lookcode-wordpress.stor.sinaapp.com/uploads/2016/01/react_native1.jpg',
                          type: 'news',
                          webpageUrl: 'http://wwww.lcode.org'
                        })
                        .catch((error) => {
                          toastShort(error.message);
                        });
                      } else {
                        toastShort('没有安装微信软件，请您安装微信之后再试');
                      }
                    });
                }}
              >
                <View style={styles.shareContent}>
                  <Image
                    style={styles.shareIcon}
                    source={shareIconWechat}
                  />
                  <Text style={styles.spinnerTitle}>
                    微信
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => {
                  WeChat.isWXAppInstalled()
                    .then((isInstalled) => {
                      if (isInstalled) {
                        WeChat.shareToTimeline({
                          title: 'React Native开发的嘎嘎商城哦~赶紧来体验吧...',
                          description: '分享自:嘎嘎商城-微信订阅号:codedev123',
                          thumbImage: 'http://lookcode-wordpress.stor.sinaapp.com/uploads/2016/01/react_native1.jpg',
                          type: 'news',
                          webpageUrl: 'http://wwww.lcode.org'
                        })
                        .catch((error) => {
                          toastShort(error.message);
                        });
                      } else {
                        toastShort('没有安装微信软件，请您安装微信之后再试');
                      }
                    });
                }}
              >
                <View style={styles.shareContent}>
                  <Image
                    style={styles.shareIcon}
                    source={shareIconMoments}
                  />
                  <Text style={styles.spinnerTitle}>
                    朋友圈
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  } 
  render() {
        return (
             <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <View style={{height:48,backgroundColor:'black',flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{marginLeft:10,justifyContent:'center'}}>
                       <Image 
                          style={{width:13,height:20}}
                          source={require('../../imgs/ic_center_back.png')}
                       />
                    </TouchableOpacity>  
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>分享给好友</Text>   
                    </View>  
                    <View style={{width:48,height:48}}/>
                </View>
                <Modal
                    animationType="fade"
                    visible={this.state.isShareModal}
                    transparent
                    onRequestClose={() => {
                         this.setState({
                         isShareModal: false
                       });
                  }}
                >
                {this.renderSpinner()}
                </Modal>  
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
    },
    spinner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.65)'
  },
  spinnerContent: {
    justifyContent: 'center',
    width: Dimensions.get('window').width * (7 / 10),
    height: Dimensions.get('window').width * (7 / 10) * 0.68,
    backgroundColor: '#fcfcfc',
    padding: 20,
    borderRadius: 5
  },
  spinnerTitle: {
    fontSize: 18,
    color: '#313131',
    textAlign: 'center',
    marginTop: 5
  },
  shareContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareIcon: {
    width: 40,
    height: 40
  }
});

export default ShareToFriend;