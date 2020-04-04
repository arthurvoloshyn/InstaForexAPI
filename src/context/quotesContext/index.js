import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useDataApi from '../../hooks/useDataApi';

export const QuotesContext = createContext();

export const QuotesProvider = ({ children }) => {
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
