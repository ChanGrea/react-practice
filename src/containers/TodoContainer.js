import { TodoInput, TodoList } from "components";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as baseActions from "store/modules/base";

const initialTodos = [];

class TodoContainer extends PureComponent {
  state = {
    input: "",
    todos: initialTodos
  };

  id = 1;
  getId = () => {
    return ++this.id;
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  };

  handleInsert = () => {
    const { todos, input } = this.state;

    const newTodo = {
      text: input,
      done: false,
      id: this.getId()
    };

    this.setState({
      todos: [...todos, newTodo],
      input: ""
    });
  };

  handleToggle = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };

    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  };

  handleRemove = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1, todos.length)]
    });
  };

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;

    return (
      <>
        <TodoInput
          onChange={handleChange}
          onInsert={handleInsert}
          value={input}
        />
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </>
    );
  }
}

TodoContainer.propTypes = {
  BaseActions: PropTypes.object
};

TodoContainer.defaultProps = {
  BaseActions: null
};

export default connect(
  state => ({}),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(TodoContainer);
