import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

class DefaultErrorBoundary extends Component {
  state = {
    isError: false
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    return isError ? <Text>Something went wrong!</Text> : children;
  }
}

export default DefaultErrorBoundary;
