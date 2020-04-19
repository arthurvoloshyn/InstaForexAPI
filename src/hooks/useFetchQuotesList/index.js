import { useEffect, useReducer, useCallback } from 'react';
import { BASE_PATH, QUOTES_LIST, FIELDS_PARAM } from '../../constants/paths';
import { encodeSeparatedFields, sortBySymbol } from '../../utils';
import dataFetchReducer, { initState } from '../../reducers/dataFetchReducer';
import { fetchInit, fetchFailure, fetchSuccess } from '../../actions';

const useFetchQuotesList = () => {
  const [state, dispatch] = useReducer(dataFetchReducer, initState);

  const fetchData = useCallback(async () => {
    dispatch(fetchInit());

    try {
      const separatedFields = ['symbol', 'description', 'digits'];
      const encodedSeparatedFields = encodeSeparatedFields(separatedFields);

      const response = await fetch(
        `${BASE_PATH}${QUOTES_LIST}?${FIELDS_PARAM}${encodedSeparatedFields}`,
      );
      const result = await response.json();

      const { quotesList = [] } = result;
      const sortedQuotesList = sortBySymbol(quotesList);

      dispatch(fetchSuccess(sortedQuotesList));
    } catch {
      dispatch(fetchFailure());
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [state, fetchData];
};

export default useFetchQuotesList;
