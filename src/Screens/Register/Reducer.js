//reducers 
import { FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS } from './Action';

const initialState = {
	response: null,
	isError: false,
    isFetching: false,
}

export default function Reducer (state=initialState, action) {
    switch (action.type) {
        case FETCHING_DATA: 
            return {
                ...state,
                isFetching: true,
                isError: false,
                response: null,
            }
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError:true,
                response: action.data
            }
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isError:false,
                response: action.data,
            }
        default: 
            return state;
    }
}