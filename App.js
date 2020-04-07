import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { QuotesProvider } from './src/context/quotesContext';
import QuotesList from "./src/components/QuotesList";
import ErrorBoundary from "./src/components/ErrorBoundary";
import MainState from "./src/context/main/MainState";
import DetailsState from "./src/context/details/DetailsState";
import Main from "./src/layouts/Main";

const App = () => {
    const [fontsLoaded] = useFonts({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    });

    if (!fontsLoaded) return <AppLoading />;

    return (
        <ErrorBoundary>
            <MainState>
                <DetailsState>
                    <Main/>
                </DetailsState>
            </MainState>
        </ErrorBoundary>
    );
};

export default App;
