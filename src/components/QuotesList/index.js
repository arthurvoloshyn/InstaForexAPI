import React from 'react';
import { Text, FlatList, View, ActivityIndicator } from 'react-native';
import useDataApi from '../../hooks/useDataApi';
import Quote from '../Quote';

const QuotesList = () => {
    const [{ data, isLoading, isError }] = useDataApi();

    const renderItem = ({ item }) => <Quote symbol={item.symbol} />;
    const keyExtractor = item => item.symbol;

    return (
        <View>
            {isError && <Text>Something went wrong...</Text>}

            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            )}
        </View>
    );
};

export default QuotesList;
