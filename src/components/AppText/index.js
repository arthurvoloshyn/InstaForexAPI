import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

const AppText = ({ style, children, bold, ...attrs }) => {
    const textStyles = { fontFamily: bold ? 'roboto-bold' : 'roboto-regular' };

    return (
        <Text style={[textStyles, style]} {...attrs}>{children}</Text>
    );
};

AppText.propTypes = {
    children: PropTypes.node.isRequired,
    bold: PropTypes.bool,
    style: Text.propTypes.style,
};

AppText.defaultProps = {
    bold: false,
    style: {},
};

export default AppText;
