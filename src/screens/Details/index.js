import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SECONDARY_COLOR} from "../../constants/themes";
import useFetchQuote from "../../hooks/useFetchQuote";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import styles from './styles';

const Details = ({ route }) => {
    const { symbol, description } = route.params;
    const [{ data, isError, isLoading }] = useFetchQuote(symbol);

    const openDetail = useCallback(
        (symbol, description) => {
            navigation.navigate('Detail', {symbol, description});
        },
        [navigation],
    );


    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <AppText style={[styles.text, styles.textBold]}>Symbol:</AppText>
                <AppText style={styles.text}>{symbol}</AppText>
            </View>
            <View style={styles.block}>
                <AppText style={[styles.text, styles.textBold]}>Description:</AppText>
                <AppText style={styles.text}>{description}</AppText>
            </View>
            <View style={styles.block}>
                <AppText style={[styles.text, styles.textBold]}>Digits:</AppText>
                <AppText style={styles.text}>{data['digits']}</AppText>
            </View>
            <View style={styles.block}>
                <AppText style={[styles.text, styles.textBold]}>Trade:</AppText>
                <AppText style={styles.text}>{data['trade']}</AppText>
            </View>
            {data.length > 0 && (
                <View style={styles.data}>
                    <View style={styles.block}>
                        <AppText style={[styles.text, styles.textBold]}>Ask:</AppText>
                        <AppText style={styles.text}>{data[0]['ask']}</AppText>
                    </View>
                    <View style={styles.block}>
                        <AppText style={[styles.text, styles.textBold]}>Bid:</AppText>
                        <AppText style={styles.text}>{data[0]['bid']}</AppText>
                    </View>
                    <View style={styles.block}>
                        <AppText style={[styles.text, data.textBold]}>Change:</AppText>
                        <AppText style={styles.text}>{data[0]['change']}</AppText>
                    </View>
                    <View style={styles.block}>
                        <AppText style={[styles.text, styles.textBold]}>Change 24h:</AppText>
                        <AppText style={styles.text}>{data[0]['change24h']}</AppText>
                    </View>
                </View>
            )}
            <View style={styles.button}>
                <AppButton color={SECONDARY_COLOR} onPress={() => {}}>
                    <AntDesign name="back" size={40}/>
                </AppButton>
            </View>
        </View>
    )
};

export default Details;
