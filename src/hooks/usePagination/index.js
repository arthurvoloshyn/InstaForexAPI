import { useState } from 'react';
import {
  NEXT,
  PREV,
  GO_TO_FIRST_PAGE,
  FIRST_PAGE,
} from '../../constants/pagination';

const usePagination = initialPage => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const paginate = operator => {
    operator === NEXT && setCurrentPage(currentPage + 1);
    operator === PREV && setCurrentPage(currentPage - 1);
    operator === GO_TO_FIRST_PAGE && setCurrentPage(FIRST_PAGE);
  };

  return [currentPage, paginate];
};

export default usePagination;
