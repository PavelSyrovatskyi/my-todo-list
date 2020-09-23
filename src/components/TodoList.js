import React from 'react';

const Todo = (props) => {
    return (
        <li>{props.todo.text}</li>
    )
}

const TodoList = (props) => {
    return (
        <div>
            <ul>
                {props.todos.map(todo => (
                    
                    <Todo
                        todo={todo}
                        key={todo.id}
                    />
                ))}
                
            </ul>
        </div>
    )
}

export default TodoList;