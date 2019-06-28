import React, { Component } from "react";
import TodoList from "./TodoList";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "", id: 0 };
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    var newItem = { text: this.state.text, id: this.state.id };
    this.setState({
      items: this.state.items.concat(newItem),
      text: "",
      id: this.state.id + 1
    });
  };

  render() {
    return (
      <div>
        <h3>TO-DO List</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default TodoApp;
