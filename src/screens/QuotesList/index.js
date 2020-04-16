import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import { DETAILS_SCREEN } from '../../constants/routes'
import { DANGER_COLOR } from "../../constants/themes";
import { QuotesListContext } from '../../contextes/quotesListContext';
import ErrorIndicator from "../../components/ErrorIndicator";
import AppButton from "../../components/AppButton";
import AppLoader from "../../components/AppLoader";
import EmptyPage from "../../components/EmptyPage";
import Search from "../../components/Search";
import Pagination from "../../components/Pagination";
import Quote from '../../components/Quote';
import styles from './styles';

const QuotesList = ({ navigation }) => {
    const { data, isError, isLoading, currentPage, totalPages, search, updateSearch, fetchData, paginate } = useContext(QuotesListContext);

    const openDetails = (symbol, description, digits) => navigation.navigate(DETAILS_SCREEN, { symbol, description, digits });

    const renderItem = ({ item: { symbol, description, digits } }) => (
        <Quote symbol={symbol} description={description} digits={digits} onPress={openDetails} />
    );
    const keyExtractor = ({ symbol }) => symbol;
    const renderEmpty = () => <EmptyPage />;

    if (isError) {
        return (
            <ErrorIndicator>
                <AppButton backgroundColor={DANGER_COLOR} onPress={fetchData}>Try again</AppButton>
            </ErrorIndicator>
        )
    }

    if (isLoading) return <AppLoader />;

    return (
        <View style={styles.container}>
            <Search onChangeText={updateSearch} value={search} />

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

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPress={paginate}
            />
        </View>
    );
};

QuotesList.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
};

QuotesList.defaultProps = {
    navigation: {
        navigate: () => {},
    },
};

export default QuotesList;
