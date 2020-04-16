import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import MainProvider from './src/context/mainContext';
import ErrorBoundary from "./src/components/ErrorBoundary";
import Main from "./src/layouts/Main";
import robotoRegularFont from './assets/fonts/Roboto-Regular.ttf';

const App = () => {
    const [fontsLoaded] = useFonts({
        'roboto-regular': robotoRegularFont,
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
