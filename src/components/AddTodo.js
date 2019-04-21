import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

import { connect } from 'react-redux';
import { newTodo, todoText, completeTodo } from '../actions /actions';

class AddTodo extends Component {

    addTodoText = (event) => {
        const { addText } = this.props;
        addText(event.target.value)
    }

    addTodoItem = (item) => () => {
        const { addTodo } = this.props;
        if (item !== '') {
            addTodo(item);
        }
        // localStorage.setItem('newToDo', item);
    }

    addTodoKey = (item) => (event) => {
        const { addTodo } = this.props;
        if (event.key === 'Enter') {
            addTodo(item);
        }
    }

    completeTodo = () => {

    }

    render() {
        const { item } = this.props;
        return (
            <InputGroup>
                <Input onChange={this.addTodoText} onKeyDown={this.addTodoKey(item)} />
                <InputGroupAddon addonType="append">
                    <Button color="success" outline onClick={this.addTodoItem(item)}>Add new todo</Button>
                </InputGroupAddon>
            </InputGroup>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        addText: (text) => {
            dispatch(todoText(text));
        },
        addTodo: (item) => {
            dispatch(newTodo(item));
        },
        removeTodo: (list) => {
            dispatch(completeTodo(list))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
