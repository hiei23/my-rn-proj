import * as types from '../actions/actionTypes';

export default function productsData(state = {isLoading: false,	data: [],	error: false}, action = null) {

	switch(action.type) {
		case types.RECEIVED_ERROR:
			return Object.assign({}, state, {isLoading: false, data: action.data, error: true});
		case types.RECEIVED_DATA:
			return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
		case types.REQUEST_DATA:
			return Object.assign({}, state, {isLoading: true, error: false });
		default:
			return state;
	}
};
