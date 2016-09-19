/**
 * 商品列表Reducers
 */
'use strict';
import * as types from '../common/ActionTypes';

const initialState = {
    loading : false,
    left_items : [],
    right_items : [],
    data_items : [],
    selectedItem : ''
}
export default function goods(state = initialState, action){
    switch (action.type) {
        case types.FETCH_GOOS_ACTION:
                  return Object.assign({}, state, {
                      loading: true
                  });
        case types.RECEIVE_GOODS_ACTION:
                  return Object.assign({}, state, {
                       loading: false,
                       left_items: action.left_items,
                       right_items: action.right_items,
                       data_items: action.data_items,
                       selectedItem : action.left_items[0]
                  });
        default:
            return state;
    }
}