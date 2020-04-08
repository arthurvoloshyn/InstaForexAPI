import { useEffect, useReducer } from "react";
import { BASE_PATH, FIELDS_PARAM, QUOTES_TICK, INSTRUMENTS_PARAM } from '../../constants/paths';
import dataFetchReducer, { initState } from '../../reducers/dataFetchReducer';
import { fetchInit, fetchFailure, fetchSuccess } from '../../actions';
import { encodeSeparatedFields, encodeSymbol } from "../../utils";

const useFetchQuote = quoteId => {
    const [state, dispatch] = useReducer(dataFetchReducer, initState);

    const fetchData = async () => {
        dispatch(fetchInit());

        try {
            const query = encodeSymbol(quoteId);
            const separatedFields = ['ask', 'bid', 'change', 'change24h'];
            const encodedSeparatedFields = encodeSeparatedFields(separatedFields);

            const result = await fetch(`${BASE_PATH}${QUOTES_TICK}?${FIELDS_PARAM}${encodedSeparatedFields}&${INSTRUMENTS_PARAM}${query}`);
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

export default useFetchQuote;
