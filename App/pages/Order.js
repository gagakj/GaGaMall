'use strict';
import React, {Component} from 'react';
import{ 
    View,
    Text,
} from 'react-native';
class Order extends Component {
    render() {
        return (
             <View>
                <View style={{height:45,backgroundColor:'black',flexDirection:'column'}}>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                       <Text style={{fontSize:18,color:'white',alignSelf:'center'}}>订单</Text>   
                    </View>  
                </View>
             </View>
        );
    }
}

export default Order;