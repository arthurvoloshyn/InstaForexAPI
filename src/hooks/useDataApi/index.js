import { useEffect, useReducer } from "react";
import { BASE_PATH, QUOTES_LIST } from '../../constants/paths';
import dataFetchReducer, { initState } from '../../reducers/dataFetchReducer';
import { fetchInit, fetchFailure, fetchSuccess } from '../../actions';

const useDataApi = () => {
    const [state, dispatch] = useReducer(dataFetchReducer, initState);

    const fetchData = async () => {
        dispatch(fetchInit());

        try {
            const result = await fetch(`${BASE_PATH}${QUOTES_LIST}`);
            const data = await result.json();
            const { quotesList = [] } = data;

            dispatch(fetchSuccess(quotesList));
        } catch {
            dispatch(fetchFailure());
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return [state];
};

export default useDataApi;
