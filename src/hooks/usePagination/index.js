import { useState } from 'react';
import { NEXT, PREV } from '../../constants/pagination';
import { quotesPerPage } from "../../services/getDeviceSize";
import { getDataForCurrentPage } from '../../utils';

const usePagination = quotesList => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, currentQuotesList] = getDataForCurrentPage(currentPage, quotesList, quotesPerPage);

  const paginate = operator => {
    if (operator === NEXT) {
      setCurrentPage(currentPage + 1);
    } else if (operator === PREV) {
      setCurrentPage(currentPage - 1);
    }
  };

  return [currentPage, paginate, totalPages, currentQuotesList];
};

export default usePagination;
