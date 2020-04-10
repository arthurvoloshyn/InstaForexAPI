import React from 'react';
import { View, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { AntDesign } from '@expo/vector-icons';
import { NEXT, PREV } from "../../constants/base";
import { isAndroid } from "../../services/detectDevice";
import AppText from "../AppText";
import styles from './styles';

const Pagination = ({ onPress }) => {
    const Wrapper = isAndroid ? TouchableNativeFeedback : TouchableOpacity;
    const nextPage = () => onPress(NEXT);
    const prevPage = () => onPress(PREV);

    return (
        <View style={[styles.pagination, styles.container]}>
            <Wrapper onPress={prevPage} activeOpacity={0.7}>
                <AntDesign name="caretleft" size={40}/>
            </Wrapper>

            <View style={[styles.pagination, styles.body]}>
                <AppText style={styles.text}>10 of 350</AppText>
            </View>

            <Wrapper onPress={nextPage} activeOpacity={0.7}>
                <AntDesign name="caretright" size={40}/>
            </Wrapper>
        </View>
    );
};

Pagination.propTypes = {
    value: PropTypes.string,
    onChangeText: PropTypes.func
};

Pagination.defaultProps = {
    value: '',
    onChangeText: () => {}
};

export default Pagination;
