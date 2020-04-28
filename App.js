import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { FONTS } from './src/constants/files';
import MainProvider from './src/contextes/mainContext';
import Main from './src/views/layouts/Main';
import ErrorBoundary from './src/views/components/ErrorBoundary';

const App = () => {
  const [fontsLoaded] = useFonts(FONTS);

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
