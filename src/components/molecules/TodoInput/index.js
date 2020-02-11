import React from "react";
import styles from "./TodoInput.scss";
import classNames from "classnames/bind";
import { Input, Button } from "components";

const cx = classNames.bind(styles);

const TodoInput = ({ onChange, value, onInsert }) => {
  return (
    <div className={cx("todo-input")}>
      <Input onChange={onChange} value={value} onInsert={onInsert} />
      <Button onInsert={onInsert} />
    </div>
  );
};

export default TodoInput;
