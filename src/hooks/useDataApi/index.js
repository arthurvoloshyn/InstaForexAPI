import { useEffect, useReducer } from "react";
import dataFetchReducer, { initState } from '../../reducers/dataFetchReducer';
import { fetchInit, fetchFailure, fetchSuccess } from '../../actions';

const useDataApi = () => {
    const [state, dispatch] = useReducer(dataFetchReducer, initState);

    const fetchData = async () => {
        dispatch(fetchInit());

        try {
            const result = await fetch('https://quotes.instaforex.com/api/quotesList');
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
