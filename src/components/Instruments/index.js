import React from 'react';
import { Text, FlatList, View, ActivityIndicator } from 'react-native';
import useDataApi from '../../hooks/useDataApi';
import Instrument from '../Instrument';

const Instruments = () => {
    const [{ data: { hits = [] }, isLoading, isError }] = useDataApi();

    const renderItem = ({ item }) => <Instrument title={item.title} />;
    const keyExtractor = item => item.objectID;

    return (
        <View>
            {isError && <Text>Something went wrong...</Text>}

            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={hits}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            )}
        </View>
    );
};

export default Instruments;
