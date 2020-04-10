import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { QuotesProvider } from './src/context/quotesContext';
import Navigation from "./src/navigation";
import ErrorBoundary from "./src/components/ErrorBoundary";

const App = () => {
    const [fontsLoaded] = useFonts({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });

    if (!fontsLoaded) return <AppLoading />;

    return (
        <ErrorBoundary>
            <QuotesProvider>
                <Navigation />
            </QuotesProvider>
        </ErrorBoundary>
    );
};

export default App;
