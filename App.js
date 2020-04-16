import 'react-native-gesture-handler';
import React from 'react';x
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import MainProvider from './src/context/mainContext';
import ErrorBoundary from "./src/components/ErrorBoundary";
import Main from "./src/layouts/Main";

const App = () => {
    const fontSource = require('./assets/fonts/Roboto-Regular.ttf');
    const [fontsLoaded] = useFonts({
        'roboto-regular': fontSource,
    });

    if (!fontsLoaded) return <AppLoading />;

    return (
        <ErrorBoundary>
            <MainProvider>
                <Main />
            </MainProvider>
        </ErrorBoundary>
    );
};

export default App;
