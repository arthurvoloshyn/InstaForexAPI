import { FETCH_INIT, FETCH_FAILURE, FETCH_SUCCESS } from '../../constants/actionTypes';

export const initState = {
    isLoading: false,
    isError: false,
    data: [],
};

const fetchQuoteReducer = (state = initState, { type, data }) => {
    switch (type) {
        case FETCH_INIT:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data,
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            return state;
    }
};

export default fetchQuoteReducer;
