import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';

const Search = ({ onChangeText, value }) => {
    const onChangeTextHandler = text => onChangeText(text);

    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeTextHandler}
            placeholder='Search...'
            value={value}
        />
    );
};

Search.propTypes = {
    value: PropTypes.string,
    onChangeText: PropTypes.func
};

Search.defaultProps = {
    value: '',
    onChangeText: () => {}
};

export default Search;
