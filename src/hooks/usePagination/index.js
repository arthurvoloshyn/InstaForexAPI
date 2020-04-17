import { useReducer } from 'react';
import { NEXT, PREV } from '../../constants/pagination';
import fetchQuotesListReducer, { initState } from "../../reducers/fetchQuotesListReducer";
import { changePage } from "../../actions";

const usePagination = () => {
  const [{ page }, dispatch] = useReducer(fetchQuotesListReducer, initState);

  const paginate = operator => {
    operator === NEXT && dispatch(changePage(page + 1));
    operator === PREV && dispatch(changePage(page - 1));
  };

  return [page, paginate];
};

export default usePagination;
