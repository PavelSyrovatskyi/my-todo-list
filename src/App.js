import React, { Component } from 'react';
import FormTodo from './components/FormTodo';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  
  addTodo = todo => {
    this.setState(prevState => ({
      todos: [...prevState.todos, {
        id: prevState.todos.length + 1,
        text: todo,
        isEdit: false
      }],
    }))
    /* const addTodos =
      this.state.todos.map((element) => {
        return {
          ...element,
          id: element.todos.length + 1,
          text: todo,
          isEdit: false
        }
      }) 
    this.setState({
      todos: addTodos
    })
    console.log('addTodo', addTodos) */
  }

  render() {
    return (
      <>
        <div className="App">
          <FormTodo
            addTodo={this.addTodo}
          />

          <TodoList
            todos={this.state.todos}
          />
        </div>
      </>
    );
  }

}

export default App;
