import React from "react";
import { PageTemplate } from "components";

const TodoPage = ({ children }) => {
  return <PageTemplate title="일정 관리" content={children} />;
};

export default TodoPage;
