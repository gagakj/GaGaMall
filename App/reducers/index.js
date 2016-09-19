'use strict';
import {combineReducers} from 'redux';
import login from './LoginReducer';
import goods from './GoodsReducer';
const rootReducer = combineReducers({
      login,
      goods
})
export default rootReducer;