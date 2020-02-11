import React from "react";
import styles from "./Button.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = ({ onInsert }) => {
  return (
    <div className={cx("add-button")} onClick={onInsert}>
      추가
    </div>
  );
};

export default Button;
