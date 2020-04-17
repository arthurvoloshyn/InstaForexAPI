import { useEffect, useReducer } from "react";
import { BASE_PATH, QUOTES_LIST, FIELDS_PARAM } from '../../constants/paths';
import { encodeSeparatedFields, sortBySymbol } from "../../utils";
import fetchQuotesListReducer, { initState } from '../../reducers/fetchQuotesListReducer';
import { fetchInit, fetchFailure, fetchSuccess } from '../../actions';

const useFetchQuotesList = () => {
    const [{ isError, isLoading, data }, dispatch] = useReducer(fetchQuotesListReducer, initState);
    const state = { isError, isLoading, data };

    const fetchData = async () => {
        dispatch(fetchInit());

        try {
            const separatedFields = ['symbol', 'description', 'digits'];
            const encodedSeparatedFields = encodeSeparatedFields(separatedFields);

            const result = await fetch(`${BASE_PATH}${QUOTES_LIST}?${FIELDS_PARAM}${encodedSeparatedFields}`);
            const data = await result.json();

            const { quotesList = [] } = data;
            const sortedQuotesList = sortBySymbol(quotesList);

            dispatch(fetchSuccess(sortedQuotesList));
        } catch {
            dispatch(fetchFailure());
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return [state, fetchData];
};

export default useFetchQuotesList;
