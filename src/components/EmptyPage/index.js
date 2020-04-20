import React from 'react';
import { View, Image } from 'react-native';
import { IMGS } from '../../constants/files';
import styles from './styles';

const EmptyPage = () => (
  <View style={styles.wrapper}>
    <Image style={styles.image} source={IMGS.noItems} />
  </View>
);

export default EmptyPage;
