import React, { useCallback } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { WiredButton, WiredInput } from "wired-elements";
import { connect } from 'react-redux';

import { newTodo, todoText } from '../actions /actions';

const AddTodo = ({ addText, addTodo, item }) => {

  const addTodoText = useCallback((event) => {
    addText(event.target.value)
  })

  const addTodoItem = useCallback((item) => () => {
    if (item !== '') {
      addTodo(item);
    }
  })

  const addTodoKey = useCallback((item) => (event) => {
    if (event.key === 'Enter') {
      addTodo(item);
    }
  })

  return (
    <InputGroup>
      <Input onChange={addTodoText} value={item} onKeyDown={addTodoKey(item)} />
      <InputGroupAddon addonType="append">
        <Button color="success" outline onClick={addTodoItem(item)}>Add new todo</Button>
      </InputGroupAddon>
    </InputGroup>
    // <div>
    //     <Wired-input onChange={this.addTodoText} value={item} onKeyDown={this.addTodoKey(item)} />
    //     <Wired-button onClick={this.addTodoItem(item)}>Add new todo</Wired-button>
    // </div>
  )
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
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
