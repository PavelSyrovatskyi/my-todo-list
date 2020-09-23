import React, { Component } from 'react';

class FormTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleChange = e => {
        this.setState({ text: e.target.value })
    }

    handleSubmit = () => {
        this.props.addTodo(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div className="header">
                <h2>My To Do List</h2>

                <input
                    value={this.state.text}
                    type="text"
                    placeholder="Add todo..."
                    onChange={e => this.handleChange(e)}
                />
                <button
                    onClick={this.handleSubmit}
                    className="addBtn"
                >
                    Add
                </button>
            </div>
        )
    }

}

export default FormTodo;