import React, {
    useState,
} from 'react';
import { Text, FlatList, View } from 'react-native';
import useDataApi from '../../hooks/useDataApi';
import Instrument from '../Instrument';

const Instruments = () => {
    const [query, setQuery] = useState('redux');
    const [{ data: { hits = [] }, isLoading, isError }, doFetch] = useDataApi(
        'http://hn.algolia.com/api/v1/search?query=redux',
        { hits: [] },
    );

    const renderItem = ({ item }) => <Instrument title={item.title} />;

    return (
        <View>
            {isError && <Text>Something went wrong ...</Text>}

            {isLoading ? (
                <Text>Loading ...</Text>
            ) : (
                <FlatList
                    data={hits}
                    renderItem={renderItem}
                    keyExtractor={item => item.objectID}
                />
            )}
        </View>
    );
};

export default Instruments;
