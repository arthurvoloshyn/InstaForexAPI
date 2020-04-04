import React from 'react';
import { Text, View } from 'react-native';

const Instrument = ({ symbol }) => (
    <View>
        <Text>{symbol}</Text>
    </View>
);

export default Instrument;
