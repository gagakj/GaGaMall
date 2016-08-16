'use strict';
import React, {Component} from 'react';
import{ 
    View,
    Text,
    BackAndroid,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
    Dimensions,
} from 'react-native';
import { NaviGoBack } from '../../utils/CommonUtils';
import ShortLineTwo from '../../component/ShortLineTwo';
import Button from '../../component/Button';
import GridView from '../../component/GridView';
import ShortLine from '../../component/ShortLine';

var {height,width} =  Dimensions.get('window');
var buttonWidth=(width-40)/3;

let typeCategory={
  0:'10',
  1:'30',
  2:'50',
  3:'100',
  4:'200',
  5:'500',
  6:'自定义金额',
};

let tempTypeIds = [0,1,2,3,4,5,6];
let checked = -1;

class Prepaid extends Component {
  constructor(props) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);    
      this.renderItem=this.renderItem.bind(this);
      this.buttonItem=this.buttonItem.bind(this);
      this.submitPay=this.submitPay.bind(this);
  }
  //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  buttonItem(rowData){
      const {navigator} = this.props;
      checked = rowData;
      console.log('rowData:'+rowData);
      if(rowData === (tempTypeIds.length-1)){
         //点击了自定义金额,进行打开Modal
         
      }else{
         //选中部分金额
      }
  }
  //提交支付
  submitPay(){
      console.log('submitPay...');
  }
  renderItem(rowData) {
     var ischecked = rowData === checked ? true : false;
     return (
       <Button
             key={rowData}
             containerStyle={{marginTop:10,width:buttonWidth, padding: 10, backgroundColor:'white',
                                  borderWidth: 1, borderColor: '#b3b3b3',marginLeft: 10}}
             style={{ fontSize: 14, textAlign: 'center',color: '#b3b3b3'}}
             text={typeCategory[rowData]}
             onPress={()=>{this.buttonItem(rowData)}}
            />
    );
  }
  render() {
        return (
             <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <View style={{height:48,backgroundColor:'black',flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => {this.buttonBackAction()}} 
                                      style={{width:48,height:48,justifyContent:'center',alignItems:'center'}}>
                       <Image 
                          style={{width:13,height:20}}
                          source={require('../../imgs/ic_center_back.png')}
                       />
                    </TouchableOpacity>  
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>充值</Text>   
                    </View>  
                    <View style={{width:48,height:48}}/>
                </View>
                <View style={{ alignItems: 'center',marginRight:10}}>
                     <GridView
                            items={Array.from(tempTypeIds)}
                            itemsPerRow={3}
                            renderItem={this.renderItem}
                           />
                </View>

                <Text style={{marginLeft:10,marginTop:13,fontSize:14}}>支付方式</Text>
                
                <View style={{marginTop:13,backgroundColor:'white'}}>
                      <TouchableOpacity style={{flex:1,height:45,flexDirection:'row',alignItems:'center'}}>
                          <Image source={require('../../imgs/msp_icon.png')} 
                                 style={{width:28,height:28,marginLeft:13}}/>
                          <Text style={{marginLeft:10}}>支付宝</Text>
                          <View style={{flex:1,alignItems:'flex-end'}}>
                                <Image source={require('../../imgs/ic_center_addressm_card_add.png')}
                                       style={{width:20,height:20,marginRight:10}}/>
                          </View>
                      </TouchableOpacity>
                      <ShortLine/>
                      <TouchableOpacity style={{flex:1,height:45,flexDirection:'row',alignItems:'center'}}>
                          <Image source={require('../../imgs/msp_weixin.png')} 
                                 style={{width:28,height:28,marginLeft:13}}/>
                          <Text style={{marginLeft:10}}>微信</Text>
                          <View style={{flex:1,alignItems:'flex-end'}}>
                                <Image source={require('../../imgs/ic_center_addressm_card_add.png')}
                                       style={{width:20,height:20,marginRight:10}}/>
                          </View>
                      </TouchableOpacity>
                </View>
                <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                     <TouchableOpacity style={{marginBottom:10}} onPress={()=>{this.submitPay()}}>
                         <Image source={require('../../imgs/ic_center_other_share.png')} style={styles.share_img}>
                              <Text style={styles.share_btn_tv}>确定充值</Text>
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

export default Prepaid;