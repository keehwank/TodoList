import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { amDone: false };
  }

  handleClick = () => {
    this.setState({ amDone: !this.state.amDone });
  };

  render() {
    var line = this.state.amDone ? "line-through" : "none";
    return (
      <li
        key={this.props.id}
        onClick={this.handleClick}
        style={{ textDecoration: line }}
      >
        {this.props.text}
      </li>
    );
  }
}

export default TodoItem;
