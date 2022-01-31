import React, { useState } from 'react';
import TryFunc from './TryFunc';

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }

  return array;
}

const NumberBaseballFunc = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setResult('홈런!');
      setTries((prevTries) => {
        return [...prevTries, { try: value, result: '홈런!' }];
      });
      alert('게임을 다시 시작합니다.');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
    } else {
      // if wrong
      const answerArray = value.split('').map((v) => parseInt(v)); //value =1234 -> answerArray = [1,2,3,4]
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        //10번째 틀렸을 때
        setResult(`10번 넘게 틀려서 실패! 값은 ${answer.join(',')}였습니다.`);
        alert('게임을 다시 시작합니다');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      } else {
        //실패하고 스트라이크와 볼 수를 알려줄 때
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            //if strike
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            //if ball
            ball += 1;
          }
        }
        setTries((prevTries) => {
          return [
            ...prevTries,
            { try: value, result: `${strike}스트라이크 ${ball}볼` },
          ];
        });
        setValue('');
      }
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmit}>
        <input maxLength={4} value={value} onChange={onChange} />
      </form>
      <div>시도 : {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <TryFunc key={i} tryInfo={v} />;
        })}
      </ul>
    </>
  );
};

export default NumberBaseballFunc;
