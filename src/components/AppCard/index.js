import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const AppCard = ({ cardStyle, children, ...attrs }) => <View style={[styles.card, cardStyle]} {...attrs}>{children}</View>;

AppCard.propTypes = {
    children: PropTypes.node.isRequired,
    cardStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

AppCard.defaultProps = {
    cardStyle: {},
};

export default AppCard;
