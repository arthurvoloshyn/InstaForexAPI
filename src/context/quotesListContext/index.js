import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { FIRST_PAGE } from "../../constants/pagination";
import { getDataForCurrentPage } from "../../utils";
import { quotesPerPage } from "../../services/getDeviceSize";
import { initState } from '../../reducers/dataFetchReducer';
import useFetchQuotesList from '../../hooks/useFetchQuotesList';
import usePagination from "../../hooks/usePagination";

const defaultQuotesList = {
  ...initState,
  totalPages: 1,
  currentPage: 1,
  fetchData: () => {},
  paginate: () => {},
};

const QuotesListContext = createContext(defaultQuotesList);

const QuotesListProvider = ({ children }) => {
  const [{ data, isError, isLoading }, fetchData] = useFetchQuotesList();
  const [currentPage, paginate] = usePagination(FIRST_PAGE);
  const [totalPages, currentQuotesList] = getDataForCurrentPage(currentPage, data, quotesPerPage);

  const value = {
    data: currentQuotesList,
    isError,
    isLoading,
    currentPage,
    totalPages,
    fetchData,
    paginate,
  };

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
