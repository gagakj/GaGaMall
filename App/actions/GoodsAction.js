/**
 * 商品列表Action操作
 */
'use strict';

import * as types from '../common/ActionTypes';
import { STORE_DETAILS_DATA } from '../common/VirtualData';
import {formatStore,calculateGood,calculateLength} from '../utils/StoreFormat';
import { toastShort } from '../utils/ToastUtil';

//获取商品列表
export function fetchGoodsAction(){
     return dispatch => {
        dispatch(dispatchGoodsAction());
        var right_items = formatStore(eval(STORE_DETAILS_DATA).data);
        var left_items = Object.keys(right_items);
        var data_length = calculateLength(eval(STORE_DETAILS_DATA).data);
        dispatch(receiveGoodsAction(left_items,right_items,data_length));
     }
}

//点击切换商品类别
export function changeCategoryAction(data){
     return dispatch => {
        dispatch(changeDistanceAction(data));  
     }
}


function dispatchGoodsAction() {
        return {
            type: types.FETCH_GOOS_ACTION,
        }
}
//获取到数据
function receiveGoodsAction(left_items,right_items,data_length){
        return {
            type: types.RECEIVE_GOODS_ACTION,
            left_items : left_items,
            right_items : right_items,
            selectedItem : left_items[0],
            data_length : data_length
        }
}

function changeDistanceAction(selectedItem){
        return {
            type : types.CHANGE_CATEGORY_ACTION,
            selectedItem : selectedItem
        }
}