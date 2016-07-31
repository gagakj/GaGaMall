//根据页面
'use strict';

import React from 'react';
import {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View
} from 'react-native';

import Splash from './pages/Splash';
import { NaviGoBack } from './utils/CommonUtils';

var _navigator;
class rootApp extends React.Component {
    constructor(props) {
       super(props);
       this.renderScene = this.renderScene.bind(this);
       this.goBack = this.goBack.bind(this);
       BackAndroid.addEventListener('hardwareBackPress', this.goBack);
   }

  goBack() {
    return NaviGoBack(_navigator);
  }

  renderScene(route, navigator) {
    let Component = route.component;
    _navigator = navigator;
    return (
      <Component navigator={navigator} route={route} />
    );
  }

  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
         backgroundColor="black"
         barStyle="default"
       />
        <Navigator
          ref='navigator'
          style={styles.navigator}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
          initialRoute={{
            component: Splash,
            name: 'Splash'
          }}
        />
      </View>
    );
  } 
}
let styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

export default rootApp;

