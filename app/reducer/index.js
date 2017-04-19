import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';

import productsData from "./reducer_Products";

const rootReducer = combineReducers({
	productsData: productsData
});

export default rootReducer;
