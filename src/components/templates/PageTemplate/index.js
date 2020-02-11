import React from "react";
import styles from "./PageTemplate.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PageTemplate = props => {
  const { title, content } = props;
  return (
    <div className={cx("page-template")}>
      <h1>{title}</h1>
      <div className={cx("content")}>{content}</div>
    </div>
  );
};

export default PageTemplate;
