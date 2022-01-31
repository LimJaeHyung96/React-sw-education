import React from 'react';

const GuGuResultList = ({ data }) => {
  const { index, text } = data;
  return <div>{`${index}번. ${text}`}</div>;
  // return <div>{index}번. {text}</div>; 와 같음
};

export default GuGuResultList;
