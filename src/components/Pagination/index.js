import React from 'react';
import { View, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { AntDesign } from '@expo/vector-icons';
import { NEXT, PREV, FIRST_PAGE } from "../../constants/pagination";
import { isAndroid } from "../../services/detectDevice";
import AppText from "../AppText";
import styles from './styles';

const Pagination = ({ totalPages, currentPage, onPress, iconsSize, activeOpacity }) => {
    if (totalPages <= 1) return null;

    const Wrapper = isAndroid ? TouchableNativeFeedback : TouchableOpacity;

    const nextPage = () => onPress(NEXT);
    const prevPage = () => onPress(PREV);

    const isFirstPage = currentPage === FIRST_PAGE;
    const isLastPage = currentPage === totalPages;

    return (
        <View style={[styles.pagination, styles.container]}>
            <Wrapper onPress={prevPage} activeOpacity={activeOpacity} disabled={isFirstPage}>
                <AntDesign name="caretleft" size={iconsSize} />
            </Wrapper>

            <View style={[styles.pagination, styles.body]}>
                <AppText textStyle={styles.text}>{currentPage} of {totalPages}</AppText>
            </View>

            <Wrapper onPress={nextPage} activeOpacity={activeOpacity} disabled={isLastPage}>
                <AntDesign name="caretright" size={iconsSize} />
            </Wrapper>
        </View>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    onPress: PropTypes.func,
    iconsSize: PropTypes.number,
    activeOpacity: PropTypes.number,
};

Pagination.defaultProps = {
    currentPage: 1,
    totalPages: 1,
    onPress: () => {},
    iconsSize: 40,
    activeOpacity: 0.7,
};

export default Pagination;
