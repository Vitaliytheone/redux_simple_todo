import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';

import { movedTodo } from '../actions /actions';

import AddTodo from './AddTodo';
import SortableTodoList from './SortableTodoList';

const TodoList = ({ list, orderList }) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Button></Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <AddTodo></AddTodo>
        </Col>
      </Row>
      <SortableTodoList axis="xy" list={list} onSortEnd={orderList}></SortableTodoList>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    orderList: ({ oldIndex, newIndex }) => {
      dispatch(movedTodo(oldIndex, newIndex))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

