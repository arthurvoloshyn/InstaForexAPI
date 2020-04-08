import React, { useReducer } from 'react';
import { encodeSeparatedFields, encodeSymbol } from "../../utils";
import { DetailsContext } from "./DetailsContext";
import { DetailsReducer } from "./DetailsReducer";
import {
  CLEAR_ERROR,
  FETCH_QUOTE,
  FETCH_QUOTES,
  FILTER_BY_SEARCH,
  HIDE_LOADER,
  SHOW_ERROR,
  SHOW_LOADER,
  PAGINATE_NEXT,
  PAGINATE_PREV,
  PAGINATE_INIT
} from '../types';

const DetailsState = ({children}) => {
  const initialSate = {
    quotes: [],
    quote: [],
    quotesFiltered: [],
    startIndex: 0,
    lastIndex: 6,
    itemsPerPage: 6,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(DetailsReducer, initialSate);

  const fetchQuote = async (quoteId) => {
    const query = encodeSymbol(quoteId);
    showLoader();
    clearError();
    try {
      const separatedFields = ['ask', 'bid', 'change', 'change24h'];
      const encodedSeparatedFields = encodeSeparatedFields(separatedFields);
      const response = await fetch(`https://quotes.instaforex.com/api/quotesTick?f=${encodedSeparatedFields}&q=${query}`);
      const quote = await response.json();
      dispatch({type: FETCH_QUOTE, payload: quote});
    } catch (e) {
      showError('Something went wrong, try again');
      console.log('Error', e);
    } finally {
      hideLoader();
    }
  };

  const fetchQuotes = async () => {
    showLoader();
    clearError();
    try {
      const separatedFields = ['symbol', 'description', 'digits'];
      const encodedSeparatedFields = encodeSeparatedFields(separatedFields);
      const response = await fetch(`https://quotes.instaforex.com/api/quotesList?f=${encodedSeparatedFields}`);
      const data = await response.json();
      const quotes = data.quotesList.sort((a, b) => a.symbol > b.symbol ? 1 : -1);
      dispatch({type: FETCH_QUOTES, payload: quotes});
    } catch (e) {
      showError('Something went wrong, try again');
      console.log('Error', e);
    } finally {
      hideLoader();
    }
  };

  const filterQuotes = (text = '') => {
    if (text.length > 0) {
      dispatch({type: FILTER_BY_SEARCH, payload: text})
    }
  };

  const init = ({startIndex, lastIndex, itemsNumber}) => {
    dispatch({type: PAGINATE_INIT, payload: {startIndex, lastIndex, itemsNumber}})
  }

  const paginate = (action) => {
    if (action === 'next') {
      dispatch({type: PAGINATE_NEXT})
    } else {
      dispatch({type: PAGINATE_PREV})
    }
  }

  const showLoader = () => dispatch({type: SHOW_LOADER});
  const hideLoader = () => dispatch({type: HIDE_LOADER});

  const showError = error => dispatch({type: SHOW_ERROR, error});
  const clearError = () => dispatch({type: CLEAR_ERROR});

  return (
    <DetailsContext.Provider
      value={{
        quotes: state.quotes,
        quote: state.quote,
        quotesFiltered: state.quotesFiltered,
        loading: state.loading,
        error: state.error,
        startIndex: state.startIndex,
        lastIndex: state.lastIndex,
        itemsPerPage: state.itemsPerPage,
        fetchQuotes,
        fetchQuote,
        filterQuotes,
        paginate,
        init
      }}
    >
      {children}
    </DetailsContext.Provider>
  )
};

export default DetailsState;
