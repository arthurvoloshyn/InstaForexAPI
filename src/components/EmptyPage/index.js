import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import noItemsImage from '../../../assets/no-items.png';

const EmptyPage = () => (
  <View style={styles.wrapper}>
    <Image style={styles.image} source={noItemsImage} />
  </View>
);

export default EmptyPage;
