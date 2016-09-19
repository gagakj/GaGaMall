/**
 * 商品列表Action操作
 */
'use strict';

import * as types from '../common/ActionTypes';
import { STORE_DETAILS_DATA } from '../common/VirtualData';
import {formatStore,calculateGood} from '../utils/StoreFormat';
import { toastShort } from '../utils/ToastUtil';

//获取商品列表
export function fetchGoodsAction(){
     return dispatch => {
        dispatch(dispatchGoodsAction());
        var right_items = formatStore(eval(STORE_DETAILS_DATA).data);
        var data_items = calculateGood(eval(STORE_DETAILS_DATA).data);
        var left_items = Object.keys(right_items);
        dispatch(receiveGoodsAction(left_items,right_items,data_items));
     }
}

//点击切换商品类别
export function changeCategoryAction(){
     
}


function dispatchGoodsAction() {
        return {
            type: types.FETCH_GOOS_ACTION,
        }
}
//获取到数据
function receiveGoodsAction(left_items,right_items,data_items){
        return {
            type: types.RECEIVE_GOODS_ACTION,
            left_items : left_items,
            right_items : right_items,
            data_items : data_items
        }
}