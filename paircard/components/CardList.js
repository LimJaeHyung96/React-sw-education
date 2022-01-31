import React, { useRef, useEffect, useState } from "react";
import {
  getInitialRandomArray,
  setNewCardList,
  setAllCardState,
} from "../util/makeCard";
import CardsOfColumn from "./CardsOfColumn";
import cn from "classnames";
const CardList = ({ mode, onMode }) => {
  const [cardList, setCardList] = useState(getInitialRandomArray());
  const [started, setStarted] = useState(false);
  const seleted = useRef(0);
  const seletedCard = useRef(null);
  const opened = useRef(0);

  const onSelected = (card, nextState) => {
    if (nextState === "hidden") {
      /*선택했던 카드를 다시 선택한 경우
      현재 카드의 state를 hidden으로 변경*/
    } else if (nextState === "selected") {
      /*현재 카드의 state를 hidden으로 변경*/
      if (seleted.current === 1) {
        //첫 번째 카드 선택. seletedCard에 현재 카드 저장
      } else if (seleted.current === 2) {
        //두 번째 카드 오픈 선택
        if (seletedCard.current.number === card.number) {
          /*선택 한 두 카드가 같을 경우*/
        } else {
          /*선택 한 두 카드가 다를 경우 0.5초 후 카드 뒤집기*/
          setTimeout(() => {
            const newArr = setNewCardList(
              cardList,
              seletedCard.current,
              "hidden"
            );
            setCardList(newArr);
          }, 500);
        }
        seleted.current = 0;
      }
    }
  };

  return (
    <div className={cn("CardList", { started })}>
      {cardList.map((cards, index) => (
        <CardsOfColumn
          cards={cards}
          key={index}
          onSelected={onSelected}
        ></CardsOfColumn>
      ))}
    </div>
  );
};

export default CardList;
