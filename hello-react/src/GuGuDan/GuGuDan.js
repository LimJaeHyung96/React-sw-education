import React, { Component } from 'react';
import GuGuHeader from './GuGuHeader';
import GuGuInput from './GuGuInput';
import GuGuResult from './GuGuResult';

class GuGuDan extends Component {
  state = {
    first: Math.floor(Math.random() * 9 + 1),
    second: Math.floor(Math.random() * 9 + 1),
    result: '결과 나올 곳',
  };
  onInsert = (_value) => {
    if (parseInt(_value) === this.state.first * this.state.second) {
      this.setState({
        first: Math.floor(Math.random() * 9 + 1),
        second: Math.floor(Math.random() * 9 + 1),
        result: '정답: ' + _value,
      });
    } else {
      this.setState((prevState) => ({
        first: Math.floor(Math.random() * 9 + 1),
        second: Math.floor(Math.random() * 9 + 1),
        result: '땡! 정답은 ' + prevState.first * precState.second + '입니다.',
      }));
    }
  };
  render() {
    return (
      <div>
        <GuGuHeader first={this.state.first} second={this.state.second} />
        <GuGuInput onInsert={this.onInsert} /> {/*함수 자체를 props로 넘김!*/}
        <GuGuResult result={this.state.result} />
      </div>
    );
  }
}

export default GuGuDan;
