import { useReducer } from "react";
import { BASE_PATH, FIELDS_PARAM, QUOTES_TICK, INSTRUMENTS_PARAM } from '../../constants/paths';
import { encodeSeparatedFields, encodeSymbol } from "../../utils";
import dataFetchReducer, { initState } from '../../reducers/dataFetchReducer';
import { fetchInit, fetchFailure, fetchSuccess } from '../../actions';

const useFetchQuote = () => {
    const [{ data = [], isLoading, isError }, dispatch] = useReducer(dataFetchReducer, initState);
    const state = { isLoading, isError, data };

    const fetchData = async quoteId => {
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

    return [state, fetchData];
};

export default useFetchQuote;
