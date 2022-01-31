export const getInitialRandomArray = () => {
  let newArr = makeArray();
  newArr = shuffleArray(newArr);
  return newArr;
};

const shuffleArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const makeArray = () => {
  let myArr = [];
  for (let i = 0; i < 49; i++) {
    const oneItem = {
      number: i + 1,
      clicked: false,
    };
    myArr.push(oneItem);
  }
  return myArr;
};
