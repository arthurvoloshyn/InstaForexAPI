import { FETCH_INIT, FETCH_FAILURE, FETCH_SUCCESS, CHANGE_PAGE, UPDATE_SEARCH } from '../../constants/actionTypes';
import { FIRST_PAGE } from "../../constants/pagination";

export const initState = {
    isLoading: false,
    isError: false,
    data: [],
    page: FIRST_PAGE,
    search: '',
};

const fetchQuotesListReducer = (state = initState, { type, data, page, search }) => {
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
        case CHANGE_PAGE:
            return {
                ...state,
                page,
            };
        case UPDATE_SEARCH:
            return {
                ...state,
                search,
            };
        default:
            return state;
    }
};

export default fetchQuotesListReducer;
