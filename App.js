import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import FONTS_LIST from './src/constants/fonts';
import MainProvider from './src/contextes/mainContext';
import Main from './src/layouts/Main';
import ErrorBoundary from './src/components/ErrorBoundary';

const App = () => {
  const [fontsLoaded] = useFonts(FONTS_LIST);

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
