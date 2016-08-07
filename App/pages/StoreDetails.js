
import React, { Component } from 'react'
import {
  Dimensions,
  Image,
  Text,
  View,
  ListView,
  TouchableOpacity
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { NaviGoBack } from '../utils/CommonUtils';
import { STORE_DETAILS_DATA } from '../common/VirtualData';

const {height,width} = Dimensions.get('window');
class StoreDetails extends Component {
  constructor(props) {
      super(props);
      this.buttonBackAction=this.buttonBackAction.bind(this);
      this.onPressItemLeft=this.onPressItemLeft.bind(this);
      this.renderItemLeft = this.renderItemLeft.bind(this); 
      this.state={
         dataSource: new ListView.DataSource({
           rowHasChanged: (row1, row2) => row1 !== row2,
         }),
         LEFT_ITEMS : eval(STORE_DETAILS_DATA).data,
      }
  }
    //返回
  buttonBackAction(){
      const {navigator} = this.props;
      return NaviGoBack(navigator);
  }
  //点击列表每一项响应按钮
  onPressItemLeft(data){
      
  }
  //进行渲染数据
  renderContentLeft(dataSource) {
    return (
      <ListView
        initialListSize={1}
        dataSource={dataSource}
        renderRow={this.renderItemLeft}
        style={{backgroundColor:'white',flex:1}}
        onEndReachedThreshold={10}
        enableEmptySections={true}
      />
    );
   }
  //渲染每一项的数据
  renderItemLeft(data) {
    return (
      <View>
      <TouchableOpacity onPress={()=>{this.onPressItemLeft(data)}}>
          <View style={{flexDirection:'row',alignItems:'center',height:55,flex:1}}>
                <Text style={{marginLeft:8,marginRight:8,flex:1}}>{data.typeName}</Text>
          </View>
      </TouchableOpacity>
      <Image source={require('../imgs/order/ic_order_heng.png')} style={{marginLeft:8}}/>  
      </View>
    );
  }
  render() {
    const {navigator,route} = this.props;
    return (
      <ParallaxScrollView
      backgroundColor="#f5f5f5"
      contentBackgroundColor="#f5f5f5"
      backgroundSpeed={10}
      parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
      stickyHeaderHeight={ STICKY_HEADER_HEIGHT}
      renderForeground={() => (
       <View style={{height: PARALLAX_HEADER_HEIGHT, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../imgs/store/ic_store_top_bg.png')} style={{width:width,height:PARALLAX_HEADER_HEIGHT}}>
                <View style={{width:45,height:45,justifyContent:'center'}}>
                     <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{justifyContent:'center',alignItems:'center'}} >
                           <Image 
                                 style={{width:13,height:20}}
                                 source={require('../imgs/ic_center_back.png')}
                           />
                     </TouchableOpacity>  
                </View>
                <View style={{flexDirection:'row',marginLeft:24,height:68,alignItems:'center'}}>
                     <Image source={require('../imgs/store/ic_store_default.png')} 
                            style={{width:68,height:68,borderRadius:34}}/>
                     <Text style={{color:'white',fontSize:16,marginLeft:26}}>{route.data.name}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                     <TouchableOpacity style={{flexDirection:'row',marginRight:10,alignItems:'center'}}>
                         <Image source={require('../imgs/store/ic_store_collection_selected.png')}
                                style={{width:15,height:13}}
                         />
                         <Text style={{color:'black',fontSize:13,marginLeft:6}}>收藏</Text>
                     </TouchableOpacity>
                </View>
            </Image>
        </View>
      )}
      
      renderStickyHeader={() => (
        <View key="sticky-header" style={{backgroundColor:'black',height:45,flexDirection:'row'}}>
              <View style={{width:45,height:45,justifyContent:'center'}}>
                     <TouchableOpacity onPress={() => {this.buttonBackAction()}} style={{justifyContent:'center',alignItems:'center'}} >
                           <Image 
                                 style={{width:13,height:20}}
                                 source={require('../imgs/ic_center_back.png')}
                           />
                     </TouchableOpacity>  
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                     <Text style={{color:'white'}}>{route.data.name}</Text>
                </View>
                <View style={{width:45,height:45}}/>
        </View>
       )}
      >
      <View style={{flex: 1,flexDirection:'row'}}>
           <View style={{flex:1,backgroundColor:'white'}}>
                {this.renderContentLeft(this.state.dataSource.cloneWithRows(
                         this.state.LEFT_ITEMS === undefined ? [] : this.state.LEFT_ITEMS))}
           </View>
           <View style={{flex:3}}>
           
           </View>
          
      </View>
    </ParallaxScrollView>
    );
  }
}

const PARALLAX_HEADER_HEIGHT = 140;
const STICKY_HEADER_HEIGHT = 45;

export default StoreDetails;