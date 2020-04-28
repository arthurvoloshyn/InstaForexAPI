import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorIndicator from '../ErrorIndicator';

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorIndicator /> : children;
  }
}

export default ErrorBoundary;
