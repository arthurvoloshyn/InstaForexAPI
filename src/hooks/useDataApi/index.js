import {useEffect, useReducer, useState} from "react";
import { FETCH_SUCCESS, FETCH_FAILURE, FETCH_INIT } from '../../constants/actionTypes';
import dataFetchReducer from '../../reducers/dataFetchReducer';

const useDataApi = (initialUrl) => {
    const [url, setUrl] = useState(initialUrl);

    const initState = {
        isLoading: false,
        isError: false,
        data: { hits: [] },
    };

    const [state, dispatch] = useReducer(dataFetchReducer, initState);

    useEffect(() => {
        let didCancel = false;

        const fetchData = async () => {
            dispatch({ type: FETCH_INIT });

            try {
                const result = await fetch(url);
                const data = await result.json();

                if (!didCancel) {
                    dispatch({ type: FETCH_SUCCESS, payload: data });
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: FETCH_FAILURE });
                }
            }
        };

        fetchData();

        return () => {
            didCancel = true;
        };
    }, [url]);

    return [state, setUrl];
};

export default useDataApi;
