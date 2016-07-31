'use strict';
import React, {Component} from 'react';
import{ 
    View,
    Text,
    TouchableOpacity,
    Image,
    InteractionManager,
} from 'react-native';
import Setting from './Setting';

class Center extends Component {
    constructor(props) {
        super(props);
        this.settingButtonAction=this.settingButtonAction.bind(this);
    }
    //设置按钮
    settingButtonAction(){
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
        navigator.push({
          component: Setting,
          name: 'Setting'
        });
      });
    }
    render() {
        return (
             <View>
                <View style={{height:45,backgroundColor:'black',flexDirection:'row'}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>我的</Text>   
                    </View>
                    <TouchableOpacity onPress={() => {this.settingButtonAction()}} style={{marginRight:10,justifyContent:'center'}}>
                       <Image 
                          style={{width:24,height:22}}
                          source={require('../imgs/ic_center_setting.png')}
                       />
                    </TouchableOpacity>  
                </View>
             </View>
        );
    }
}

export default Center;