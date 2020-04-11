import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { initState } from '../../reducers/dataFetchReducer';
import useFetchQuotesList from '../../hooks/useFetchQuotesList';

const QuotesListContext = createContext(initState);

const QuotesListProvider = ({ children }) => {
  const value = useFetchQuotesList();

  return (
    <QuotesListContext.Provider value={value}>
      {children}
    </QuotesListContext.Provider>
  );
};

QuotesListProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { QuotesListContext, QuotesListProvider };
