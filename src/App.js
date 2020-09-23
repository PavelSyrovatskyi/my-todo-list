import React, { Component } from 'react';
import FormTodo from './components/FormTodo';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  
  render() {
    return (
      <>
        <div className="App">
          <FormTodo

          />

          <TodoList

          />
        </div>
      </>
    );
  }

}

export default App;
