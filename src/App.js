import React, { useState } from 'react';
import FormTodo from './components/FormTodo';
import './App.css';
import TodoList from './components/TodoList';

const App = ({
  deleteTodo,
  handleEdit,
  handleEditSave,
  addTodo
}) => {
  

  const [todos, setTodos] = useState([]);

  

  addTodo = todo => {
    const newTodos = [
      ...todos, {
        id: todos.length + 1, 
        text:todo,
        isEdit: false 
      }];
    setTodos(newTodos);
  };


  deleteTodo = id => {
    const removeTodos = todos.filter((todo => todo.id !== id));
    setTodos(removeTodos)
  }

  handleEdit = id => {
    const editedTodos = todos.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          isEdit: !e.isEdit
        }
      } return e;
    })
    setTodos(editedTodos)
  }

  handleEditSave = (id, todo) => {
    
    const savedTodos = todos.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          text: todo,
          isEdit: !element.isEdit
        }
      } return element;
    })
    setTodos(savedTodos)
  }





  return (
    <>
      <div className="App">
        <FormTodo
          addTodo={addTodo}
        />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          handleEdit={handleEdit}
          handleEditSave={handleEditSave}
        />
      </div>
    </>
  );
}



export default App;
