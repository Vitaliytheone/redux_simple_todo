import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import AddTodo from './AddTodo';
import Todo from './Todo';

export default class TodoList extends Component {

    render() {
        return (
            <Container className="mt-5">
                <Row className="mb-3">
                    <Col>
                        <AddTodo></AddTodo>
                    </Col>
                </Row>
                <Row>
                    <Todo></Todo>
                </Row>
            </Container>
        )
    }
}

