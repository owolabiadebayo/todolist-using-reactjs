import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todo from "./component/Todo";
import Header from "./component/layout/header";
import "./App.css";
import AddTodo from "./component/layout/AddTodo";
import About from "./component/pages/About";
import { v4 as uuid } from "uuid";
import { connect } from 'react-redux'
// import { axios } from "axios";

 class App extends Component {
  markComplete = (Id) => {
    this.setState({
      Todo: this.state.Todo.map((todo) => {
        if (todo.Id === Id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  //delete
  delTodo = (Id) => {
    this.setState({
      Todo: [...this.state.Todo.filter((todo) => todo.Id !== Id)],
    });
  };
  AddTodo = (title) => {
    const newTodo = {
      Id: uuid(),
      title,
      completed: false,
    };
    this.setState({ Todo: [...this.state.Todo, newTodo] });
  };

  render() {
    console.log(this.props)
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo AddTodo={this.AddTodo} />
                <Todo
                  Todo={this.state.Todo}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
        </div>
        <Route path="/About" component={About} />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Posts: state.posts
  }

}
export default connect(mapStateToProps)(App);
