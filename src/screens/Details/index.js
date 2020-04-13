import React from 'react';
import { View } from 'react-native';
import PropTypes from "prop-types";
import { AntDesign } from '@expo/vector-icons';
import { DANGER_COLOR, SECONDARY_COLOR } from "../../constants/themes";
import useFetchQuote from "../../hooks/useFetchQuote";
import ErrorIndicator from "../../components/ErrorIndicator";
import AppLoader from "../../components/AppLoader";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import styles from './styles';

const Details = ({ route, navigation }) => {
    const { symbol, description, digits } = route.params;
    const [{ data, isError, isLoading }, fetchData] = useFetchQuote(symbol);
    const { ask, bid, change, change24h } = data;

    const goBack = () => navigation.goBack();

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
            <View style={styles.block}>
                <AppText textStyle={styles.header}>Symbol:</AppText>
                <AppText textStyle={styles.text}>{symbol}</AppText>
            </View>

            <View style={styles.block}>
                <AppText textStyle={styles.header}>Description:</AppText>
                <AppText textStyle={styles.text}>{description}</AppText>
            </View>

            <View style={styles.block}>
                <AppText textStyle={styles.header}>Digits:</AppText>
                <AppText textStyle={styles.text}>{digits}</AppText>
            </View>

            {data.length > 0 && (
                <View style={styles.data}>
                    <View style={styles.block}>
                        <AppText textStyle={styles.header}>Ask:</AppText>
                        <AppText textStyle={styles.text}>{ask}</AppText>
                    </View>

                    <View style={styles.block}>
                        <AppText textStyle={styles.header}>Bid:</AppText>
                        <AppText textStyle={styles.text}>{bid}</AppText>
                    </View>

                    <View style={styles.block}>
                        <AppText textStyle={styles.header}>Change:</AppText>
                        <AppText textStyle={styles.text}>{change}</AppText>
                    </View>

                    <View style={styles.block}>
                        <AppText textStyle={styles.header}>Change 24h:</AppText>
                        <AppText textStyle={styles.text}>{change24h}</AppText>
                    </View>
                </View>
            )}

            <View style={styles.button}>
                <AppButton color={SECONDARY_COLOR} onPress={goBack}>
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
};

Details.defaultProps = {
    route: {
        params: {
            symbol: '',
            description: '',
            digits: 0,
        }
    }
};

export default Details;
