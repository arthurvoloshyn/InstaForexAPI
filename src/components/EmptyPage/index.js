import React from 'react';
import { View, Image } from 'react-native';
import IMAGES from '../../constants/imgs';
import styles from './styles';

const EmptyPage = () => (
  <View style={styles.wrapper}>
    <Image style={styles.image} source={IMAGES.noItems} />
  </View>
);

export default EmptyPage;
