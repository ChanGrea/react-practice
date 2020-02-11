import React, { Component } from "react";
import { TodoPage } from "components";
import { TodoContainer } from "containers";

// FIXME: index error
// const initialTodos = new Array(10)
//   .fill(0)
//   .map((foo, index) => ({ id: index, text: `일정 ${index}`, done: false }));

class App extends Component {
  render() {
    return (
      <TodoPage>
        <TodoContainer />
      </TodoPage>
    );
  }
}

export default App;
