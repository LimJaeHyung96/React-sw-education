import React, { Component } from 'react';

class GuGuHeader extends Component {
  render() {
    return (
      <div>
        <h2>구구단 맞추기</h2>
        <h3>
          {this.props.first} X {this.props.second} = ?
        </h3>
      </div>
    );
  }
}

export default GuGuHeader;
