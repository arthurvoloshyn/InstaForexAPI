import { FETCH_SUCCESS, FETCH_FAILURE, FETCH_INIT, CHANGE_PAGE, UPDATE_SEARCH } from '../constants/actionTypes';

export const fetchInit = () => ({ type: FETCH_INIT });
export const fetchSuccess = data => ({ type: FETCH_SUCCESS, data });
export const fetchFailure = () => ({ type: FETCH_FAILURE });

export const changePage = page => ({ type: CHANGE_PAGE, page });

export const updateSearch = search => ({ type: UPDATE_SEARCH, search });
