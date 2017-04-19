import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';

import productsData from "./reducer_Products";

const rootReducer = combineReducers({
	productsData: productsData
});

export default rootReducer;

/*module.exports = (state={}, action) => {
	switch (action.type) {
		case 'CHANGE_TEXT':
			return {
				text: action.text
			}
		default:
			return state;
	}
}*/
