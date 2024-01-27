import React, { Component } from "react";

class App extends Component {
  state = { todos: ["Clean car", "Buy cheese", "Go skiing"] };

  onTodoInput = (e) => {
    this.setState({ todoInput: e.target.value });
    // console.log(e.target.value);
  };

  //when add clciked
  onAddClick = () => {
    const todos = [...this.state.todos]; //copy todos from state
    todos.push(this.state.todoInput); //add new todo (already stored in state)
    this.setState({ todos }); //update state with new todos
  };

  render() {
    console.log(this.state);
    const { todos } = this.state;

    return (
      <>
        <input type="text" onInput={this.onTodoInput} />
        <button onClick={this.onAddClick}>Add</button>
        {todos.map((todo) => {
          return <p>{todo}</p>;
        })}
      </>
    );
  }
}

export default App;
