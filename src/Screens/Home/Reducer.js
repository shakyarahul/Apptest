//reducers 
import { LOGIN_FETCHING_DATA, LOGIN_FETCHING_DATA_FAILURE, LOGIN_FETCHING_DATA_SUCCESS } from './Action';

const initialState = {
	response: null,
	isError: false,
    isFetching: false,
}

export default function Reducer (state=initialState, action) {
    switch (action.type) {
        case LOGIN_FETCHING_DATA: 
            return {
                ...state,
                isFetching: true,
                isError: false,
                response: null,
            }
        case LOGIN_FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError:true,
                response: action.data
            }
        case LOGIN_FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isError:false,
                response: null,
            }
        default: 
            return state;
    }
}