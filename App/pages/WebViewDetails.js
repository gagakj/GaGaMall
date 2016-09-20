/**
 * 加载网页信息
 */
'use strict';
import React, {Component} from 'react';
import{ 
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    TouchableOpacity,
    WebView,
} from 'react-native';
import { NaviGoBack } from '../utils/CommonUtils';
import LoadingView from '../component/LoadingView';

let canGoBack = false;

class WebViewDetails extends Component {
   
  constructor(props) {
    super(props);
    this.buttonBackAction=this.buttonBackAction.bind(this);    
  } 
  
   //返回
  buttonBackAction(){
    if (canGoBack) {
      this.webview.goBack();
      return true;
    }
    return NaviGoBack(this.props.navigator);
  }
  onNavigationStateChange(navState) {
    canGoBack = navState.canGoBack;
  }
   //渲染顶部头布局
  renderTopLayout(){
     return (
       <View style={{height:48,backgroundColor:'black',flexDirection:'row'}}>
                <View style={{width:48,height:48,justifyContent:'center'}}>
                     <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{justifyContent:'center',alignItems:'center'}} >
                           <Image 
                                 style={{width:13,height:20}}
                                 source={require('../imgs/ic_center_back.png')}
                           />
                     </TouchableOpacity>  
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <Text style={{color:'white',fontSize:18}}>网页页面</Text>
                </View>
                <View style={{width:48,height:48}} />
          </View>
     );
   }

  renderLoading() {
    return <LoadingView />;
  }
   
   render() {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
          {this.renderTopLayout()}
          <WebView
          ref={(ref) => { this.webview = ref; }}
          source={{uri: 'http://www.lcode.org'}}
          automaticallyAdjustContentInsets={false}
          style={{ flex: 1 }}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
          scalesPageToFit
          decelerationRate="normal"
          onShouldStartLoadWithRequest={() => {
            const shouldStartLoad = true;
            return shouldStartLoad;
          }}
          onNavigationStateChange={this.onNavigationStateChange}
          renderLoading={this.renderLoading}
        />
      </View>  
    );
  }
}

export default WebViewDetails;