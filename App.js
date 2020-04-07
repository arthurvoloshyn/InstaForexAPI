import React from 'react';
import { View } from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { QuotesProvider } from './src/context/quotesContext';
import QuotesList from "./src/components/QuotesList";
import ErrorBoundary from "./src/components/ErrorBoundary";

const App = () => {
    const [fontsLoaded] = useFonts({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });

    if (!fontsLoaded) return <AppLoading />;

    return (
        <View>
            <ErrorBoundary>
                <QuotesProvider>
                    <QuotesList/>
                </QuotesProvider>
            </ErrorBoundary>
        </View>
    );
};

export default App;
