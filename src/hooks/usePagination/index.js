import { useState } from 'react';
import { NEXT, PREV, GO_TO_FIRST_PAGE, FIRST_PAGE } from '../../constants/pagination';

const usePagination = initialPage => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const paginate = operator => {
    switch (operator) {
      case NEXT:
        setCurrentPage(currentPage + 1);
        break;
      case PREV:
        setCurrentPage(currentPage - 1);
        break;
      case GO_TO_FIRST_PAGE:
        setCurrentPage(FIRST_PAGE);
        break;
    }
  };

  return [currentPage, paginate];
};

export default usePagination;
