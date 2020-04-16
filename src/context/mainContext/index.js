import React from 'react';
import PropTypes from "prop-types";
import { QuotesListProvider } from '../quotesListContext';
import { QuoteProvider } from '../quoteContext';

const MainProvider = ({ children }) => (
    <QuotesListProvider>
        <QuoteProvider>{children}</QuoteProvider>
    </QuotesListProvider>
);

MainProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default MainProvider;
