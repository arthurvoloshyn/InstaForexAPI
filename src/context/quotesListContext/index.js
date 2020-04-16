import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { FIRST_PAGE } from "../../constants/pagination";
import { findQuotes, getDataForCurrentPage } from "../../utils";
import { quotesPerPage } from "../../services/getDeviceSize";
import { initState } from '../../reducers/dataFetchReducer';
import useFetchQuotesList from '../../hooks/useFetchQuotesList';
import useSearch from "../../hooks/useSearch";
import usePagination from "../../hooks/usePagination";

const defaultQuotesList = {
  ...initState,
  totalPages: 1,
  currentPage: 1,
  search: '',
  updateSearch: () => {},
  fetchData: () => {},
  paginate: () => {},
};

const QuotesListContext = createContext(defaultQuotesList);

const QuotesListProvider = ({ children }) => {
  const [{ data: quotesList, isError, isLoading }, fetchData] = useFetchQuotesList();

  const [search, updateSearch] = useSearch('');
  const foundQuotes = findQuotes(search, quotesList);
  const currentQuotesList = search ? foundQuotes : quotesList;

  const [currentPage, paginate] = usePagination(FIRST_PAGE);
  const [totalPages, data] = getDataForCurrentPage(currentPage, currentQuotesList, quotesPerPage);

  const value = {
    data,
    isError,
    isLoading,
    currentPage,
    totalPages,
    search,
    updateSearch,
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
