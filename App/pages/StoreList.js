/**
 * 商家列表
 */
'use strict';
import React from 'react';
import {
  Dimensions,
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListView,
  TextInput,
  InteractionManager,
} from 'react-native';

import { NaviGoBack } from '../utils/CommonUtils';
import ShortLine from '../component/ShortLine';
import StoreDetails from './StoreDetails';
var {height, width} = Dimensions.get('window');
let tempTypeIds = [1,2,3,4];

const STORE_DATA={
    "api":"GetStoreList",
    "v":"1.0",
    "code":"0",
    "msg":"success",
    "data":[{
        "id":1,
        "name":"四川Brunch",
        "star":4,
        "comment":45,
        "tag":"中国餐馆,四川菜,重辣",
        "location":"6.6km",
        "remark":"每日有优惠"
    },{
        "id":2,
        "name":"聚星楼",
        "star":4,
        "comment":45,
        "tag":"中国餐馆,四川菜,重辣",
        "location":"6.6km",
        "remark":"每日有优惠"
    },{
        "id":3,
        "name":"四川川二娃",
        "star":4,
        "comment":45,
        "tag":"中国餐馆,四川菜,重辣",
        "location":"6.6km",
        "remark":"每日有优惠"
    },{
        "id":4,
        "name":"韩国大烤肉",
        "star":4,
        "comment":45,
        "tag":"中国餐馆,四川菜,重辣",
        "location":"6.6km",
        "remark":"每日有优惠"
    },{
        "id":5,
        "name":"釜山料理",
        "star":4,
        "comment":45,
        "tag":"中国餐馆,四川菜,重辣",
        "location":"6.6km",
        "remark":"每日有优惠"
    }
    ]
};
class StoreList extends React.Component {
  constructor(props) {
    super(props);
    this.buttonBackAction=this.buttonBackAction.bind(this);    
    this.topItemAction=this.topItemAction.bind(this);
    this.onPressItem=this.onPressItem.bind(this);
    this.renderItem = this.renderItem.bind(this); 
    this.state={
         dataSource: new ListView.DataSource({
           rowHasChanged: (row1, row2) => row1 !== row2,
         }),
         storeLists :STORE_DATA.data,
      }
  } 
    //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  topItemAction(position){
      
  }
  onEndReached(typeId) {
     
  }
  /**
   * Render a separator between rows
   */
  _renderSeparatorView(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View key={`${sectionID}-${rowID}`} style={styles.separator} />
    );
  }
  //点击列表每一项响应按钮
  onPressItem(data){
      const {navigator} = this.props;
      InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: StoreDetails,
              name: 'StoreDetails',
              data
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
        style={{backgroundColor:'white',flex:1}}
        onEndReachedThreshold={10}
        enableEmptySections={true}
        renderSeparator={this._renderSeparatorView}
      />
    );
   }
  //渲染每一项的数据
  renderItem(data) {
    return (
      <View key={data.id}>
      <TouchableOpacity onPress={()=>{this.onPressItem(data)}}>
          <View style={{flexDirection:'row',marginLeft:8,marginTop:8,marginBottom:8}} >
              <Image source={require('../imgs/store/ic_store_lv_item.png')} style={{width:130,height:115}}/>
              <View style={{marginLeft:8,width:(width-149)}}>
                   <Text style={{fontSize:15,color:'black'}}>{data.name}</Text> 
                   <View style={{flexDirection:'row',marginTop:3}}>
                        { 
                         tempTypeIds.map((typeId) => {
                              const typeView = (<Image key={typeId} 
                                                       source={require('../imgs/store/ic_store_star.png')}
                                                       style={{width:10,height:10,marginLeft:3,marginTop:3}}/>);
                             return typeView;
                         })
                       }
                       <Text style={{fontSize:12,color:'#777',marginLeft:3}}>{data.comment}条评论</Text>
                   </View>
                   <Text style={{fontSize:12,color:'#777',marginTop:3}}>{data.tag}</Text>
                   <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:12,color:'#777',marginTop:3}}>{data.location}</Text>
                   </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:12,color:'#777',marginTop:3}}>{data.remark}</Text>
                   </View>
              </View>
          </View>
      </TouchableOpacity>
      <Image source={require('../imgs/ic_short_bar.png')}/>     
      </View>
    );
  }
  render() {
    return (
       <View style={{backgroundColor:'#fff',flex:1}}>
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
                     <Text style={{color:'white'}}>商家列表</Text>
                </View>
                <View style={{width:48,height:48,justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.topItemAction(0)}}>
                         <Image source={require('../imgs/home/ic_home_top_search.png')} 
                           style={{width:24,height:24,marginRight:8,alignItems:'center'}}/>
                    </TouchableOpacity>
                </View>  
          </View>
          <View style={{flexDirection:'row',height:45}}>
               <View style={{flex:1}}>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}}>
                          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:14,color:'black'}}>店家分类</Text>
                                <Image source={require('../imgs/store/ic_store_arrow_down.png')} 
                                      style={{width:10,height:10,marginLeft:3}}/>
                          </View>
                    </TouchableOpacity>
               </View>
                    <Image source={require('../imgs/store/ic_store_shu.png')} style={{height:30,width:1,marginTop:7}}/>
               <View style={{flex:1}}>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}}>
                          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:14,color:'black'}}>筛选</Text>
                                <Image source={require('../imgs/store/ic_store_arrow_down.png')} 
                                      style={{width:10,height:10,marginLeft:3}}/>
                          </View>
                    </TouchableOpacity>
               </View>
                    <Image source={require('../imgs/store/ic_store_shu.png')} style={{height:30,width:1,marginTop:7}}/>
               <View style={{flex:1}}>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',flex:1}}>
                          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:14,color:'black'}}>排序</Text>
                                <Image source={require('../imgs/store/ic_store_arrow_down.png')} 
                                      style={{width:10,height:10,marginLeft:3}}/>
                          </View>
                    </TouchableOpacity>
               </View>
          </View>
          <Image source={require('../imgs/ic_center_line.png')}/>
          <View style={{flex:1}}>
               {this.renderContent(this.state.dataSource.cloneWithRows(
                         this.state.storeLists === undefined ? [] : this.state.storeLists))}
          </View>
      </View>
    );
  }
}
let styles = StyleSheet.create({
    separator: {
       height: 1,
       backgroundColor: '#eee'
  }
});
export default StoreList;