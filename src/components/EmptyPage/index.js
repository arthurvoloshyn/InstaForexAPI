import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const imageSource = require('../../../assets/no-items.png');

const EmptyPage = () => (
    <View style={styles.wrapper}>
        <Image style={styles.image} source={imageSource} />
    </View>
);

export default EmptyPage;
