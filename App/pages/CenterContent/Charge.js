/**
 * 信用卡管理
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

import { NaviGoBack } from '../../utils/CommonUtils';
import { CHARGE_DATA } from '../../common/VirtualData';
import ChargeModify from './ChargeModify';

class Charge extends Component {
  constructor(props) {
      super(props);
      this.state={
         dataSource: new ListView.DataSource({
           rowHasChanged: (row1, row2) => row1 !== row2,
         }),
         chargeList : eval(CHARGE_DATA).data,
      }
      this.buttonBackAction=this.buttonBackAction.bind(this);    
      this.onPressItem=this.onPressItem.bind(this);
      this.renderItem = this.renderItem.bind(this); 
      this.renderFooter = this.renderFooter.bind(this);
      this.addChargeAction=this.addChargeAction.bind(this);
  }
  
  componentDidMount() {

  }

  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  onEndReached(typeId) {
     
  }
  //点击列表每一项响应按钮
  onPressItem(charge){
      const {navigator} = this.props;
      InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: ChargeModify,
              name: 'ChargeModify'
            });
          });
  }
  addChargeAction(){
      const {navigator} = this.props;
      InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: ChargeModify,
              name: 'ChargeModify'
            });
          });
  }
  //进行渲染数据
  renderContent(dataSource) {
    return (
      <ListView
        initialListSize={1}
        dataSource={dataSource}
        renderRow={this.renderItem}
        style={{backgroundColor:'white',marginTop:8}}
        onEndReachedThreshold={10}
        renderFooter={this.renderFooter}
        enableEmptySections={true}
        renderSeparator={this._renderSeparatorView}
      />
    );
   }
  /**
   * Render a separator between rows
   */
  _renderSeparatorView(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View key={`${sectionID}-${rowID}`} style={styles.separator} />
    );
  } 
  //渲染每一项的数据
  renderItem(charge) {
    return (
      <TouchableOpacity onPress={()=>{this.onPressItem(charge)}}>
          <View style={{flexDirection:'row',backgroundColor:'white'}}>
              <View style={{paddingBottom:8}}>
                   <Text style={{marginLeft:10,marginTop:8}}>{charge.name}</Text>
                   <Text style={styles.item_tv}>{charge.cardNumber}</Text>
              </View>
              <View style={styles.foot_item_view}>
                   <Image source={require('../../imgs/ic_center_addressm_card_add.png')} 
                        style={{width:25,height:25,marginRight:10}}/>
              </View>
          </View>
      </TouchableOpacity>
    );
  }
  renderFooter() {
    return (
        <View style={{height:55,backgroundColor:'#f5f5f5'}}>
           <TouchableOpacity onPress={()=>{this.addChargeAction()}}>
               <View style={{ height: 45, flexDirection: 'row',backgroundColor:'white',marginTop:10}}>
                 <Image source={require('../../imgs/ic_card_icon.png')} style={{marginLeft:10,width:24,height:18,alignSelf:'center'}}/>
                 <View style={{justifyContent:'center'}}>
                    <Text style={[styles.item_tv,{color:'black'}]}>添加信用卡</Text>
                 </View>
                 <View style={[styles.foot_item_view]}>
                    <Image source={require('../../imgs/ic_center_addressm_add.png')} 
                           style={{width:25,height:25,marginRight:8}}/>
                 </View>
            </View>
          </TouchableOpacity>
       </View>
      );
  }
  render() {
        return (
             <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <View style={{height:48,backgroundColor:'black',flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => {this.buttonBackAction()}} 
                                      style={{width:48,height:48,alignItems:'center',justifyContent:'center'}}>
                       <Image 
                          style={{width:13,height:20}}
                          source={require('../../imgs/ic_center_back.png')}
                       />
                    </TouchableOpacity>  
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>信用卡管理</Text>   
                    </View> 
                    <View style={{width:48,height:48}}/> 
                </View>
                <View >
                     {this.renderContent(this.state.dataSource.cloneWithRows(
                         this.state.chargeList === undefined ? [] : this.state.chargeList))}
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
    item_tv:{
        color:'#aaa',
        marginLeft:10
    },
    foot_item_view:{
        justifyContent:'center',
        alignItems:'flex-end',
        flex:1,
    },
    separator: {
       height: 1,
       backgroundColor: '#eee'
   }
});

export default Charge;