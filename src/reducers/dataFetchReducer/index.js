import { FETCH_INIT, FETCH_FAILURE, FETCH_SUCCESS } from '../../constants/actionTypes';

export const initState = {
    isLoading: false,
    isError: false,
    data: { hits: [] },
};

const dataFetchReducer = (state = initState, { type, payload }) => {
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
                data: payload,
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

export default dataFetchReducer;
