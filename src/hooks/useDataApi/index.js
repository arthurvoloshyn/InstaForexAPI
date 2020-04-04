import { useEffect, useReducer } from "react";
import { FETCH_SUCCESS, FETCH_FAILURE, FETCH_INIT } from '../../constants/actionTypes';
import dataFetchReducer from '../../reducers/dataFetchReducer';

const useDataApi = () => {
    const initState = {
        isLoading: false,
        isError: false,
        data: { hits: [] },
    };

    const [state, dispatch] = useReducer(dataFetchReducer, initState);

    const fetchData = async () => {
        dispatch({ type: FETCH_INIT });

        try {
            const result = await fetch('http://hn.algolia.com/api/v1/search?query=redux');
            const data = await result.json();

            dispatch({ type: FETCH_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_FAILURE });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return [state];
};

export default useDataApi;
