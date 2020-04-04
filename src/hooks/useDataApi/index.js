import {useEffect, useReducer, useState} from "react";
import dataFetchReducer from '../../reducers/dataFetchReducer';

const useDataApi = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });

    useEffect(() => {
        let didCancel = false;

        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT' });

            try {
                const result = await fetch(url);
                const data = await result.json();

                throw new Error('error');

                if (!didCancel) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: data });
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: 'FETCH_FAILURE' });
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
