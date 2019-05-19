import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import AddTodo from './AddTodo';
import { connect } from 'react-redux';

import SortableTodoList from './SortableTodoList';
import { movedTodo } from '../actions /actions';

class TodoList extends Component {

    render() {
        return (
            <Container className="mt-5">
                <Row className="mb-3">
                    <Col>
                        <AddTodo></AddTodo>
                    </Col>
                </Row>
                <SortableTodoList list={this.props.list} onSortEnd={this.props.orderList}></SortableTodoList>
            </Container>
        )
    }
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

