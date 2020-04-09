import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const AppCard = ({ style, children }) => <View style={[ styles.default, style ]}>{children}</View>;

AppCard.propTypes = {
    children: PropTypes.node.isRequired,
    style: ViewPropTypes.style,
};

AppCard.defaultProps = {
    style: {},
};

export default AppCard;
