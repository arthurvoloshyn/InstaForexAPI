import React from 'react';
import { View } from 'react-native';
import PropTypes from "prop-types";
import { AntDesign } from '@expo/vector-icons';
import { DANGER_COLOR, SECONDARY_COLOR } from "../../constants/themes";
import { SECONDARY_DETAILS_LIST, PRIMARY_DETAILS_LIST } from "../../constants/lists";
import { getDataListWithValues } from "../../utils";
import useFetchQuote from "../../hooks/useFetchQuote";
import ErrorIndicator from "../../components/ErrorIndicator";
import AppLoader from "../../components/AppLoader";
import AppButton from "../../components/AppButton";
import Row from "../../components/Row";
import styles from './styles';

const Details = ({ route, navigation }) => {
    const { symbol } = route.params;
    const [{ data, isError, isLoading }, fetchData] = useFetchQuote(symbol);
    const primaryDetailsList = getDataListWithValues(PRIMARY_DETAILS_LIST, route.params);
    const secondaryDetailsList = getDataListWithValues(SECONDARY_DETAILS_LIST, data);

    const goBack = () => navigation.goBack();

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
            {primaryDetailsList.map(({ title, value }) => (
                <Row key={title} title={title} value={value} />
            ))}

            {data && (
                <View style={styles.data}>
                    {secondaryDetailsList.map(({ title, value }) => (
                        <Row key={title} title={title} value={value} />
                    ))}
                </View>
            )}

            <View style={styles.button}>
                <AppButton backgroundColor={SECONDARY_COLOR} onPress={goBack}>
                    <AntDesign name="back" size={40} />
                </AppButton>
            </View>
        </View>
    )
};

Details.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            symbol: PropTypes.string,
            description: PropTypes.string,
            digits: PropTypes.number,
        })
    }),
    navigation: PropTypes.shape({
        goBack: PropTypes.func,
    }),
};

Details.defaultProps = {
    route: {
        params: {
            symbol: '',
            description: '',
            digits: 0,
        }
    },
    navigation: {
        goBack: () => {},
    },
};

export default Details;
