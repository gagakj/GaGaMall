import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {doLogin} from '../actions/Login'
import MainPage from '../pages/MainPage'
class LoginPage extends Component {
  shouldComponentUpdate(nextProps, nextState)
  {
    // 登录完成，且成功登录
    if (nextProps.status === 'done' && nextProps.isSuccess) {
      this.props.navigator.replace({
        id: 'MainPage',
        component: MainPage,
        passProps: {
           user: nextProps.user
        },
      });
      return false;
    }
    return true;
  }

  render() {
    let tips;
    if (this.props.status === 'init')
    {
      tips = '请点击登录';
    }
    else if (this.props.status === 'doing')
    {
      tips = '正在登录...';
    }
    else if (this.props.status === 'done' && !this.props.isSuccess)
    {
      tips = '登录失败, 请重新登录';
    }
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Text>{tips}</Text>
        <TouchableOpacity style={{backgroundColor: '#FF0000'}} onPress={this.handleLogin.bind(this)}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
            <Text style={{color: '#FFFFFF', fontSize: 20}}>登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  // 执行登录
  handleLogin()
  {
    this.props.dispatch(doLogin());
  }
}

function select(store)
{
  return {
    status: store.loginIn.status,
    isSuccess: store.loginIn.isSuccess,
    user: store.loginIn.user
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(select)(LoginPage);