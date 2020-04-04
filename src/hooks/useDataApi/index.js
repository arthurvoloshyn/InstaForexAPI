import { useEffect, useReducer } from "react";
import dataFetchReducer, { initState } from '../../reducers/dataFetchReducer';
import { fetchInit, fetchFailure, fetchSuccess } from '../../actions';

const useDataApi = () => {
    const [state, dispatch] = useReducer(dataFetchReducer, initState);

    const fetchData = async () => {
        dispatch(fetchInit());

        try {
            const result = await fetch('http://hn.algolia.com/api/v1/search?query=redux');
            const data = await result.json();

            dispatch(fetchSuccess(data));
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
