import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { initState } from '../../reducers/dataFetchReducer';
import useFetchQuotesList from '../../hooks/useFetchQuotesList';

const QuotesListContext = createContext(initState);

const QuotesListProvider = ({ children }) => {
  const [state] = useFetchQuotesList();

  return (
    <QuotesListContext.Provider value={state}>
      {children}
    </QuotesListContext.Provider>
  );
};

QuotesListProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { QuotesListContext, QuotesListProvider };
