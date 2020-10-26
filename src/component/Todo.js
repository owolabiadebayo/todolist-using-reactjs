import React, { Component } from "react";
import Todoitem from "./Todoitem";

export default class Todo extends Component {
  render() {
    const {Todo,delTodo,markComplete}=this.props
    return Todo.map((todo) => (
      <Todoitem
        delTodo={delTodo}
        markComplete={markComplete}
        key={todo.Id}
        todo={todo}
      />
    ));
  }
}
