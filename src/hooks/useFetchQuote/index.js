import { useReducer, useCallback } from 'react';
import {
  BASE_PATH,
  FIELDS_PARAM,
  QUOTES_TICK,
  INSTRUMENTS_PARAM,
} from '../../constants/paths';
import { encodeSeparatedFields, encodeSymbol } from '../../utils';
import dataFetchReducer, { initState } from '../../reducers/dataFetchReducer';
import { fetchInit, fetchFailure, fetchSuccess } from '../../actions';

const useFetchQuote = () => {
  const [{ data = [], isLoading, isError }, dispatch] = useReducer(
    dataFetchReducer,
    initState,
  );
  const state = { isLoading, isError, data };

  const fetchData = useCallback(async quoteId => {
    dispatch(fetchInit());

    try {
      const query = encodeSymbol(quoteId);
      const separatedFields = ['ask', 'bid', 'change', 'change24h'];
      const encodedSeparatedFields = encodeSeparatedFields(separatedFields);

      const response = await fetch(
        `${BASE_PATH}${QUOTES_TICK}?${FIELDS_PARAM}${encodedSeparatedFields}&${INSTRUMENTS_PARAM}${query}`,
      );
      const result = await response.json();

      dispatch(fetchSuccess(result));
    } catch {
      dispatch(fetchFailure());
    }
  }, []);

  return [state, fetchData];
};

export default useFetchQuote;
