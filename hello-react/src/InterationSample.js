import React from 'react';

const InterationSample = () => {
  const fruits = ['귤', '오렌지', '한라봉', '천혜향'];
  const fruitList = fruits.map((name, index) => {
    return <li key={index}>{name}</li>;
  });
  return (
    <div>
      <ul>{fruitList}</ul>
    </div>
  );
};

export default InterationSample;
