import React from 'react';
import { View } from 'react-native';
import Instruments from "./src/components/Instruments";
import DefaultErrorBoundary from "./src/components/DefaultErrorBoundary";

const App = () => (
    <View>
        <DefaultErrorBoundary>
            <Instruments />
        </DefaultErrorBoundary>
    </View>
);

export default App;
