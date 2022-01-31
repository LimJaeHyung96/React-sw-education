export const setAllCardState = (cardList, _state) => {
  let newArr = cardList.map((cards) =>
    cards.map((card) => ({ ...card, state: _state }))
  );
  return newArr;
};

export const setNewCardList = (cardList, card, _state) => {
  let newArr = [];
  if (_state === "open") {
    newArr = cardList.map((cards) =>
      cards.map((_card) =>
        _card.number === card.number ? { ..._card, state: _state } : _card
      )
    );
  } else {
    newArr = cardList.map((cards) =>
      cards.map((_card) =>
        _card.number === card.number && _card.id === card.id
          ? { ..._card, state: _state }
          : _card
      )
    );
  }

  return newArr;
};

export const getInitialRandomArray = () => {
  const halfArray = makeArray();
  let allArray = halfArray.concat(halfArray);
  allArray = shuffleArray(allArray);
  let newArray = columnArray(allArray);
  return newArray;
};

const columnArray = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; ) {
    let oneColumnArr = [];
    for (let j = 0; j < 5; j++, i++) {
      const oneCard = {
        id: i,
        number: array[i],
        state: "hidden",
      };
      oneColumnArr.push(oneCard);
    }
    newArray.push(oneColumnArr);
  }
  return newArray;
};

const shuffleArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const makeArray = () => {
  let randomArray = [];
  for (let i = 0; i < 10; i++) {
    let randNum = Math.floor(Math.random() * 89 + 10);
    if (randomArray.indexOf(randNum) === -1) {
      randomArray.push(randNum);
    } else {
      i--;
    }
  }
  return randomArray;
};
