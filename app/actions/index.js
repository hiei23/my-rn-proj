import * as types from './actionTypes';
import axios from 'axios';

function requestData() {
	return {type: types.REQUEST_DATA}
};

function receiveData(json) {
	return{
		type: types.RECEIVED_DATA,
		data: json
	}
};

function receiveError(json) {
	return {
		type: types.RECEIVED_ERROR,
		data: json
	}
};

export function fetchData(url) {
	return function(dispatch) {
		dispatch(requestData());
		return axios.get(url)
		.then(function(response) {
			console.log(response.data)
				dispatch(receiveData(response.data));
		})
		.catch(function(response){
			dispatch(receiveError(response.data));
		})
	}
};
