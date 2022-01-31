import React, { Component } from 'react';

class GuGuInput extends Component {
  state = {
    inputStr: '',
  };
  onChange = (e) => {
    this.setState({
      inputStr: e.target.value,
    });
    console.log(this.state.inputStr);
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onInsert(this.state.inputStr);
    this.setState({ inputStr: '' });
    this.input.focus();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            ref={(ref) => {
              this.input = ref;
            }}
            type="number"
            value={this.state.inputStr}
            onChange={this.onChange}
          ></input>
          <button>입력</button>
        </form>
      </div>
    );
  }
}

export default GuGuInput;
