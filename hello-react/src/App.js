import React, { Component } from 'react';
import './App.css';
//import ErrorCatch from './ErrorCatch';
//simport EventPractice from './EventPractice';
//import GuGuDan from './GuGuFunc/GuGuDan';
//import NumberBaseball from './NumberBaseball';
import NumberBaseballFunc from './NumberBaseballFunc';
//import InterationSample from './InterationSample';
//import LifeCycleSample from './LifeCycleSample';

//App이 상위 컴포넌트 MyName이 하위 컴포넌트
class App extends Component {
  render() {
    return (
      <div>
        <NumberBaseballFunc />
      </div>
    );
  }
}

export default App;
