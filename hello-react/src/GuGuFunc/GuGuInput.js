import React, { useRef, useState } from 'react';

const GuGuInput = ({ onInsert }) => {
  const [inputStr, setInputStr] = useState('');
  const inputRef = useRef();
  const onChange = (e) => {
    setInputStr(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(inputStr);
    setInputStr('');
    inputRef.current.focus();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="number"
          value={inputStr}
          onChange={onChange}
        ></input>
        <button>입력</button>
      </form>
    </div>
  );
};

export default GuGuInput;
