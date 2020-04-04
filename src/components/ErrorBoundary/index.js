import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <Text>Something went wrong!</Text> : children;
  }
}

export default ErrorBoundary;
