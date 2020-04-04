import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

class DefaultErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <Text>Something went wrong!</Text> : children;
  }
}

export default DefaultErrorBoundary;
