import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // Initializes the component's state with an array of three todo items.
  state = {
    todos: [
      { title: "Clean car", done: false },
      { title: "Buy eggs", done: true },
      { title: "Buy house", done: false },
    ],
  };

  //Handle Input Changes - Updates the todoInput property in the component's state whenever there is a change in the input field.
  onTodoInput = (e) => {
    this.setState({ todoInput: e.target.value });
    // console.log(e.target.value);
  };

  //Handle Add Button Click:
  onAddClick = () => {
    const todos = [...this.state.todos]; //copy todos from state
    todos.push({ title: this.state.todoInput, todo: false }); //add new todo (already stored in state)
    this.setState({ todos }); //update state with new todos
  };

  onDeleteClick = (title) => {
    // console.log("Del clicked", todo);
    const todos = [...this.state.todos]; //make copy of todos
    const indexOf = todos.findIndex((todo) => todo.title === title); //look for index of the todo
    todos.splice(indexOf, 1); //remove one element from the todos array at the index determined by the indexOf variable.
    this.setState({ todos }); //setState triggers a re-render of the component with the updated state.
  };

  onTodoToggleClick = (title) => {
    const todos = [...this.state.todos]; //make copy of todos
    const indexOf = todos.findIndex((todo) => todo.title === title); //look for index of the todo
    todos[indexOf].done = !todos[indexOf].done; //makes done opposite of itself
    this.setState({ todos });
  };

  onDeleteAll = () => {
    this.setState({ todos: [] });
  };

  //Render JSX - Renders JSX, including an input field for todo input, an "Add" button that triggers the onAddClick function, and a list of todo items displayed as paragraphs.
  render() {
    console.log(this.state);
    const { todos } = this.state;

    let totalTodo = 0;
    todos.forEach((todo) => {
      if (!todo.done) {
        totalTodo++;
      }
    });

    return (
      <>
        <input type="text" onInput={this.onTodoInput} />
        <button onClick={this.onAddClick}>Add</button>
        <h1> Total todos: {totalTodo} </h1>
        {todos.map((todo) => {
          return (
            //if todo has a done property that is true, add done to class, otherwise add undone
            <div className={todo.done ? "done" : "undone"}>
              <p onClick={() => this.onTodoToggleClick(todo.title)}>
                {todo.title}
              </p>
              <button onClick={() => this.onDeleteClick(todo.title)}>X</button>
            </div>
          );
        })}
        <button onClick={this.onDeleteAll}> Delete ALL</button>
      </>
    );
  }
}

export default App;
