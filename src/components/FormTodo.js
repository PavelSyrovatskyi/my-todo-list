import React, {Component} from 'react';

class FormTodo extends Component {
    render() {
        return (
            <div className="header">
                <h2>My To Do List</h2>
                
                <input
                    placeholder="Add todo..." 
                    
                />
                <button 
                    onclick={() => {}} 
                    className="addBtn">Add
                </button>
            </div>
        )
    }
    
}

export default FormTodo;