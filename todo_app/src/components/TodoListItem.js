import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onCheck }) => {
  const { id, text, checked } = todo;
  const onClick = () => {
    onRemove(id);
  };
  const _onClick = () => {
    onCheck(id);
  };
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={_onClick}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={onClick}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
