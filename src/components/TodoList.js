import React, {useState, useEffect} from 'react';


const Todo = ({
    todo: {
        text,
        id,
        isEdit
    },
    
    handleEditSave,
    deleteTodo

}) => {
    const [todo,setTodo] = useState('');
    useEffect(() => {
        setTodo(text)
    }, [text])

    return (
        <>
        <div 
            className="todo"
            onClick={() => {
                handleEditSave(id, todo)
            }}
                
        >
            {isEdit ? (
                <>
                <input 
                    onClick={() => {
                        handleEditSave(id, todo)
                    }
                        
                        
                    }
                    type="text"
                    value={todo}
                    autoFocus
                    onChange={(e) => setTodo(e.target.value)}
                />
                </>
            ) : (
                <span>
                    {text}
                </span>
            )}
            
            <span>
            {isEdit ? (
                    <button
                    onClick={(e) => {
                        e.stopPropagation()
                        handleEditSave(id, todo)}
                    }
                    className="saveBtn">
                    Save
                </button>
            ) : (
                <button 
                className="delete-btn"
                onClick={(e) => {
                    deleteTodo(id)
                    e.stopPropagation()}
                }>
            X
            </button>
            )}
            
            </span>
        </div>
        
        </>
    )
}

const TodoList = ({
    todos,
    handleEdit,
    deleteTodo,
    handleEditSave
}) => {
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <Todo
                    todo={todo}
                    key={todo.id}
                    deleteTodo={deleteTodo}
                    handleEdit={handleEdit}
                    handleEditSave={handleEditSave}
                />
            ))}
        </div>
        
    );
};

export default TodoList;