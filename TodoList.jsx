import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(function(item) {
          return <TodoItem id={item.id} text={item.text} />;
        })}
      </ul>
    );
  }
}

export default TodoList;
