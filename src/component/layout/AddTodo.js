import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Addtodo..."
          style={{ flex: "10" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <button
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: "3" }}
        >
          Addto
        </button>
      </form>
    );
  }
}

export default AddTodo;
