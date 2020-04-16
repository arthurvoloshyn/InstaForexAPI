import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import MainProvider from './src/contextes/mainContext';
import ErrorBoundary from "./src/components/ErrorBoundary";
import Main from "./src/layouts/Main";
import robotoRegularFont from './assets/fonts/Roboto-Regular.ttf';
import robotoBoldFont from './assets/fonts/Roboto-Bold.ttf';

const App = () => {
    const [fontsLoaded] = useFonts({
        'roboto-regular': robotoRegularFont,
        'roboto-bold': robotoBoldFont,
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
