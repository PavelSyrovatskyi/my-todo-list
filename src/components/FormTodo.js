import React, { useState, useEffect } from 'react';

const FormTodo = ({
    handleChange,
    handleSubmit,
    addTodo
}) => {
    
    const [text, setText] = useState('');
    useEffect(() => {
        setText(text)
    }, [text])

    handleChange = e => {
       setText(e.target.value)
    }

    handleSubmit = () => {
        addTodo(text);
        setText('')
    }

    
        return (
            <div className="header">
                <h2>My To Do List</h2>

                <input
                    value={text}
                    type="text"
                    placeholder="Add todo..."
                    onChange={e => handleChange(e)}
                />
                <button
                    onClick={handleSubmit}
                    className="addBtn"
                >
                    Add
                </button>
            </div>
        )
    }



export default FormTodo;