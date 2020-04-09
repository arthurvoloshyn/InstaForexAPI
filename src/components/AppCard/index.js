import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const AppCard = ({ style, children }) => <View style={[ styles.default, style ]}>{children}</View>;

AppCard.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

AppCard.defaultProps = {
    style: {},
};

export default AppCard;
