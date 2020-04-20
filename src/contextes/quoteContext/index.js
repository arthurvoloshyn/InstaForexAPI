import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { initState } from '../../reducers/dataFetchReducer';
import useFetchQuote from '../../hooks/useFetchQuote';

const initContextValue = {
  ...initState,
  fetchData: () => {},
};

const QuoteContext = createContext(initContextValue);

const QuoteProvider = ({ children }) => {
  const [{ data = [], isLoading, isError }, fetchData] = useFetchQuote();

  const value = {
    data,
    isError,
    isLoading,
    fetchData,
  };

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
};

QuoteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { QuoteContext, QuoteProvider };
