import React, { Component } from 'react';

class ErrorCatch extends Component {
  state = {
    _error: false,
  };
  componentDidCatch(error, info) {
    this.setState({
      _error: true,
    });
    console.log(error, info);
  }
  render() {
    return (
      <div>{this.state._error ? <p>에러발생</p> : this.props.children}</div>
    );
  }
}

export default ErrorCatch;
