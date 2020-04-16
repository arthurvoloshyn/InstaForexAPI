import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { initState } from '../../reducers/dataFetchReducer';
import useFetchQuote from "../../hooks/useFetchQuote";

const defaultQuote = {
    ...initState,
    fetchData: () => {},
};

const QuoteContext = createContext(defaultQuote);

const QuoteProvider = ({ children }) => {
    const [{ data, isError, isLoading }, fetchData] = useFetchQuote();

    const value = {
        data,
        isError,
        isLoading,
        fetchData,
    };

    return (
        <QuoteContext.Provider value={value}>
            {children}
        </QuoteContext.Provider>
    );
};

QuoteProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export { QuoteContext, QuoteProvider };
