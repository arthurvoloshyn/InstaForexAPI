import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const EmptyPage = () => (
    <View style={styles.wrapper}>
        <Image style={styles.image} source={require('../../../assets/no-items.png')} />
    </View>
);

export default EmptyPage;
