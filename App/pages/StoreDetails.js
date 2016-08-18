
import React, { Component,PropTypes } from 'react'
import {
  Dimensions,
  Image,
  Text,
  View,
  ListView,
  TouchableOpacity,
  StyleSheet,
  InteractionManager
} from 'react-native';

import { NaviGoBack } from '../utils/CommonUtils';
import { STORE_DETAILS_DATA } from '../common/VirtualData';
import {formatStore,calculateGood} from '../utils/StoreFormat';
import PureListView from '../component/PureListView';
import { toastShort } from '../utils/ToastUtil';
import GoodDetails from './GoodDetails';
import Merchants from './Merchants';

const {height,width} = Dimensions.get('window');

//默认选中的类别
let selectedItem = '';
let itemMap = [];

let defaultColor = '#f5f5f5';  //默认颜色
let selectedColor = '#fff';  //选中颜色

class StoreDetails extends Component {
  constructor(props) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);
      this.topItemAction=this.topItemAction.bind(this);
      this.onPressItemLeft=this.onPressItemLeft.bind(this);
      this.onPressItemRight=this.onPressItemRight.bind(this);
      this.renderItemLeft = this.renderItemLeft.bind(this); 
      this.renderItemRight=this.renderItemRight.bind(this);
      this.collectAction=this.collectAction.bind(this);
      this.state={
         dataSource: new ListView.DataSource({
           getRowData: (dataBlob, sid, rid) => dataBlob[sid][rid],
           getSectionHeaderData: (dataBlob, sid) => dataBlob[sid],
           rowHasChanged: (row1, row2) => row1 !== row2,
           sectionHeaderHasChanged: (s1, s2) => s1 !== s2
         }),
         RIGHT_ITEMS : formatStore(eval(STORE_DETAILS_DATA).data),
         DATA_ITEMS : calculateGood(eval(STORE_DETAILS_DATA).data),
         selectIndexItem : '',
         
      }
      itemMap =Object.keys(this.state.RIGHT_ITEMS);  
      selectedItem=itemMap[0];
  }

  componentDidMount() {
      this.setState({selectIndexItem:selectedItem});
  }
    //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  topItemAction(){
      const {navigator} = this.props;
       InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: Merchants,
              name: 'Merchants',
              });
        });
  }
  collectAction(){
      toastShort('点击收藏按钮...');
  }
  /**
   * Render a separator between rows
   */
  _renderSeparatorView(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <Image key={`${sectionID}-${rowID}`} style={styles.separator}  source={require('../imgs/order/ic_order_heng.png')}/>
    );
  }
  //点击列表每一项响应按钮
  onPressItemLeft(data){
      this.setState({selectIndexItem:data});
      var distance = 0;
      //开始计算滑动的距离
      //1.首先计算出当前点击了左侧列表的第几项
      var index = itemMap.indexOf(data) !== -1 ? itemMap.indexOf(data) : 0 ;
      //2.根据index索引计算高度
      for ( var i = 0; i <index; i++){
         distance += 25 + 84 * this.state.RIGHT_ITEMS[itemMap[i]].length;
      }
      this.refs['goodLv'].scrollTo({x:0,y:distance,animated:true});
  }
  //点击右侧列表每一项相应按钮
  onPressItemRight(data){
       const {navigator} = this.props;
       InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: GoodDetails,
              name: 'GoodDetails',
              });
        });
  }
  
  //进行渲染左侧列表数据-商品分类
  renderContentLeft(dataSource) {
    return (
      <ListView
        initialListSize={1}
        dataSource={dataSource}
        renderRow={this.renderItemLeft}
        style={{flex:1}}
        onEndReachedThreshold={10}
        enableEmptySections={true}
        showsVerticalScrollIndicator={false}
        renderSeparator={this._renderSeparatorView}
      />
    );
   }
   //渲染右侧商品列表(带有section) 
  renderContentRight(dataSource) {
    return (
      <ListView
        ref={'goodLv'}
        initialListSize={this.state.DATA_ITEMS}
        dataSource={dataSource}
        renderRow={this.renderItemRight}
        style={{flex:1}}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={this._renderSectionHeader}
      />
    );
   }

  _renderSectionHeader(sectionData, sectionID){
     return(
        <View key={sectionID} style={{backgroundColor:'#eee',height:25,justifyContent:'center'}}>
             <Text style={{marginLeft:8,fontSize:11}}>{sectionID}</Text>
        </View>
     );   
  } 

  //渲染每一项的数据
  renderItemLeft(data) {
    if(data === this.state.selectIndexItem){
      return (
          <View style={{backgroundColor:selectedColor}}>
                <TouchableOpacity onPress={()=>{this.onPressItemLeft(data)}}>
                      <View style={{flexDirection:'row',alignItems:'center',height:55,flex:1}}>
                            <Text style={{marginLeft:8,marginRight:8,flex:1}}>{data}</Text>
                      </View>
                </TouchableOpacity>
         </View>
      );
    }else{
      return (
          <View style={{backgroundColor:defaultColor}}>
                <TouchableOpacity onPress={()=>{this.onPressItemLeft(data)}}>
                      <View style={{flexDirection:'row',alignItems:'center',height:55,flex:1}}>
                            <Text style={{marginLeft:8,marginRight:8,flex:1}}>{data}</Text>
                      </View>
                </TouchableOpacity>
         </View>
      );
    }
  }

  renderItemImage(data){
     if(data.picture === ''){
       return ( 
            <Image source={require('../imgs/ic_center_icon.png')} style={styles.item_image} /> 
         )
     } else {
       return (
         <Image source={{uri:data.picture}} style={styles.item_image} />
         )
     }
  }
  renderItemRight(data) {
    return (
      <TouchableOpacity onPress={()=>{this.onPressItemRight(data)}}>
           <View style={{backgroundColor:'white',flexDirection:'row'}}>
                {this.renderItemImage(data)}
                <View style={{flex:1,marginTop:10,marginBottom:10}}>
                     <Text style={{marginRight:8,color:'black'}}>{data.name}</Text>
                     <View style={{flexDirection:'row',marginTop:5}}>
                            <Text style={{fontSize:10,color:'#aaa'}}>{data.month_saled_content}</Text> 
                            <Text style={{marginLeft:10,fontSize:11,color:'#aaa'}}>{data.praise_content}</Text> 
                     </View>
                     <Text style={{color:'red',fontSize:15,marginTop:5}}>¥{data.min_price}</Text>
                </View>
                <View style={{justifyContent:'flex-end'}}>
                     <TouchableOpacity style={{width:30,height:30,marginRight:10,marginBottom:10}}
                          onPress={()=>{
                                  toastShort('点击添加购物车图标...');
                          }}
                          >
                          <Image source={require('../imgs/store/ic_store_add.png')} 
                                 style={{width:20,height:20}}/>
                     </TouchableOpacity>        
                </View>
           </View>
      </TouchableOpacity>
    );
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
                     <Text style={{color:'white',fontSize:18}}>商品列表</Text>
                </View>
                <View style={{width:48,height:48,justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.topItemAction()}}>
                         <Image source={require('../imgs/home/ic_home_top_search.png')} 
                           style={{width:24,height:24,marginRight:8,alignItems:'center'}}/>
                    </TouchableOpacity>
                </View>  
          </View>
     );
  }
  //渲染商家基本信息布局
  renderStoreBaisc(){
     const {navigator,route} = this.props; 
     return (
       <TouchableOpacity onPress={()=>{this.topItemAction()}}>
       <View style={{height: PARALLAX_HEADER_HEIGHT, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../imgs/store/ic_store_top_bg.png')} style={{width:width,height:PARALLAX_HEADER_HEIGHT}}>
                <View style={{flexDirection:'row',marginLeft:24,height:68,alignItems:'center',marginTop:12}}>
                     <Image source={require('../imgs/store/ic_store_default.png')} 
                            style={{width:68,height:68,borderRadius:34}}/>
                     <Text style={{color:'white',fontSize:16,marginLeft:26}}>{route.data.name}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                     <TouchableOpacity style={{flexDirection:'row',marginRight:10,alignItems:'center'}}
                         onPress={()=>{this.collectAction()}}>
                         <Image source={require('../imgs/store/ic_store_collection_selected.png')}
                                style={{width:15,height:13}}
                         />
                         <Text style={{color:'black',fontSize:13,marginLeft:6}}>收藏</Text>
                     </TouchableOpacity>
                </View>
            </Image>
        </View>
        </TouchableOpacity>
     );
  }
  render() {
    const {navigator,route} = this.props;  
    return (
       <View style={{flex:1}}>
         <View>
          {this.renderTopLayout()}
          {this.renderStoreBaisc()}
        </View> 
          <View style={{flexDirection:'row',flex:1}}>
                <View style={{flex:1}}>
                    {
                      this.renderContentLeft(this.state.dataSource.cloneWithRows(
                         Object.keys(this.state.RIGHT_ITEMS) === undefined ? [] : Object.keys(this.state.RIGHT_ITEMS)))
                    }
                </View>
               <View style={{flex:3}}>
                    {this.renderContentRight(this.state.dataSource.cloneWithRowsAndSections(
                         this.state.RIGHT_ITEMS === undefined ? [] : this.state.RIGHT_ITEMS,Object.keys(this.state.RIGHT_ITEMS)))}
               </View>   
        </View>  
      </View>  
    );
  }
}
const PARALLAX_HEADER_HEIGHT = 100;
const STICKY_HEADER_HEIGHT = 45;

const styles = StyleSheet.create({
    separator: {
       marginLeft:8
    },
    separatorGood: {
       height: 1,
       backgroundColor: '#eee'
  },
  font: {
    fontSize: 12.5,
    color: '#555555'
  },
  item_image:{
    width:60,
    height:60,
    margin:10,
    borderRadius:5
  }
});
export default StoreDetails;