import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { todo, onTodoToggleClick, onDeleteClick } = this.props;

    return (
      //if todo has a done property that is true, add done to class, otherwise add undone
      <div className={todo.done ? "done" : "undone"}>
        <p onClick={() => onTodoToggleClick(todo.title)}>{todo.title}</p>
        <button onClick={() => onDeleteClick(todo.title)}>X</button>
      </div>
    );
  }
}

export default Todo;
