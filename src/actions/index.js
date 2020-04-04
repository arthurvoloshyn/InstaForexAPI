import { FETCH_SUCCESS, FETCH_FAILURE, FETCH_INIT } from '../constants/actionTypes';

export const fetchInit = () => ({ type: FETCH_INIT });
export const fetchSuccess = payload => ({ type: FETCH_SUCCESS, payload });
export const fetchFailure = () => ({ type: FETCH_FAILURE });
