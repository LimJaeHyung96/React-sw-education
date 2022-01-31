import React, { Component, useRef, useState } from 'react';
import GuGuHeader from './GuGuHeader';
import GuGuInput from './GuGuInput';
import GuGuResult from './GuGuResult';

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.floor(Math.random() * 9 + 1));
  const [second, setSecond] = useState(Math.floor(Math.random() * 9 + 1));
  const [result, setResult] = useState('');
  const [datas, setDatas] = useState([]);
  const nextIndex = useRef(1);
  const onInsert = (_value) => {
    let str = '';
    if (parseInt(_value) === first * second) {
      setFirst(Math.floor(Math.random() * 9 + 1));
      setSecond(Math.floor(Math.random() * 9 + 1));
      setResult('정답: ' + _value);
      str = '정답';
    } else {
      setResult(
        '땡! 정답은 ' +
          first +
          ' x ' +
          second +
          ' = ' +
          first * second +
          '입니다.',
      );
      setFirst(Math.floor(Math.random() * 9 + 1));
      setSecond(Math.floor(Math.random() * 9 + 1));
      str = '땡';
    }
    const data = {
      index: nextIndex.current,
      text: `${first} x ${second} = ${_value}, ${str}`,
    };
    setDatas(datas.concat(data));
    nextIndex.current += 1;
  };
  return (
    <div>
      <p>함수형 컴포넌트로 만든</p>
      <GuGuHeader first={first} second={second} />
      <GuGuInput onInsert={onInsert} /> {/*함수 자체를 props로 넘김!*/}
      <GuGuResult result={result} datas={datas} />
    </div>
  );
};

export default GuGuDan;
