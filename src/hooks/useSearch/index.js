import { useReducer } from 'react';
import fetchQuotesListReducer, { initState } from "../../reducers/fetchQuotesListReducer";
import { updateSearch } from "../../actions";

const useSearch = () => {
    const [{ search }, dispatch] = useReducer(fetchQuotesListReducer, initState);

    const handleSearch = value => {
        dispatch(updateSearch(value));
    };

    return [search, handleSearch];
};

export default useSearch;
