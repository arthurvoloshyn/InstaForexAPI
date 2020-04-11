import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useDataApi from '../../hooks/useFetchQuotesList';

const QuotesContext = createContext();

const QuotesProvider = ({ children }) => {
  const [state] = useDataApi();

  return (
    <QuotesContext.Provider value={state}>
      {children}
    </QuotesContext.Provider>
  );
};

QuotesProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { QuotesContext, QuotesProvider };
