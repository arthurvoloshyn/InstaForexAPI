import React from 'react';
import { View } from 'react-native';
import { QuotesProvider } from './src/context/quotesContext';
import QuotesList from "./src/components/QuotesList";
import ErrorBoundary from "./src/components/ErrorBoundary";

const App = () => (
    <View>
        <ErrorBoundary>
            <QuotesProvider>
                <QuotesList />
            </QuotesProvider>
        </ErrorBoundary>
    </View>
);

export default App;
