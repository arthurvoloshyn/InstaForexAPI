import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { findQuotes, getDataForCurrentPage } from "../../utils";
import { quotesPerPage } from "../../services/getDeviceSize";
import { initState } from '../../reducers/fetchQuotesListReducer';
import useFetchQuotesList from '../../hooks/useFetchQuotesList';
import useSearch from "../../hooks/useSearch";
import usePagination from "../../hooks/usePagination";

const initContextValue = {
  ...initState,
  totalPages: 1,
  updateSearch: () => {},
  fetchData: () => {},
  paginate: () => {},
};

const QuotesListContext = createContext(initContextValue);

const QuotesListProvider = ({ children }) => {
  const [{ data: quotesList, isError, isLoading }, fetchData] = useFetchQuotesList();

  const [page, paginate] = usePagination();

  const [search, updateSearch] = useSearch();
  const foundQuotes = findQuotes(search, quotesList);
  const currentQuotesList = search ? foundQuotes : quotesList;

  const [totalPages, data] = getDataForCurrentPage(page, currentQuotesList, quotesPerPage);

  const value = {
    data,
    isError,
    isLoading,
    page,
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
