import React, { Component } from "react";

export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: "#kf4f4k",
      padding: "10px",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const {Id, title} = this.props.todo
    const{markComplete,delTodo} = this.props
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={markComplete.bind(this, Id)} />
          {title}
          <button onClick = {delTodo.bind(this, Id)} style ={btnStyle}>x</button>
        </p>
      </div>
    );
  }
}
const btnStyle ={
  background: '#ff0000'
}

export default Todoitem;
