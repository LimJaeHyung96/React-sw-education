import React from 'react';
import GuGuResultList from './GuGuResultList';

const GuGuResult = ({ result, datas }) => {
  return (
    <div>
      {result}
      {datas.map((data) => (
        <GuGuResultList data={data} key={data.index}></GuGuResultList>
      ))}
    </div>
  );
};
//map함수는 리턴하는 것이 없으면 {} 대신 () 사용가능
export default GuGuResult;
