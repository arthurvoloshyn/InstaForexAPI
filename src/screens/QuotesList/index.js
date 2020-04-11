import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { DANGER_COLOR } from "../../constants/themes";
import { QuotesListContext } from '../../context/quotesListContext';
import ErrorIndicator from "../../components/ErrorIndicator";
import AppButton from "../../components/AppButton";
import AppLoader from "../../components/AppLoader";
import EmptyPage from "../../components/EmptyPage";
import Search from "../../components/Search";
import Pagination from "../../components/Pagination";
import Quote from '../../components/Quote';
import styles from './styles';

const QuotesList = () => {
    const [{ data, isError, isLoading }, fetchData] = useContext(QuotesListContext);

    const renderItem = ({ item: { symbol } }) => <Quote symbol={symbol} />;
    const keyExtractor = ({ symbol }) => symbol;
    const renderEmpty = () => <EmptyPage />;

    if (isError) {
        return (
            <ErrorIndicator>
                <AppButton onPress={fetchData} backgroundColor={DANGER_COLOR}>Try again</AppButton>
            </ErrorIndicator>
        )
    }

    if (isLoading) return <AppLoader />;

    return (
        <View style={styles.container}>
            <Search />

            <View style={styles.quotes}>
                <FlatList
                    data={data}
                    onRefresh={fetchData}
                    refreshing={isLoading}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    ListEmptyComponent={renderEmpty}
                />
            </View>

            <Pagination />
        </View>
    );
};

export default QuotesList;
