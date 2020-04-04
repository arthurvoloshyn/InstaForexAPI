import React from 'react';
import { View } from 'react-native';
import QuotesList from "./src/components/QuotesList";
import ErrorBoundary from "./src/components/ErrorBoundary";

const App = () => (
    <View>
        <ErrorBoundary>
            <QuotesList />
        </ErrorBoundary>
    </View>
);

export default App;
