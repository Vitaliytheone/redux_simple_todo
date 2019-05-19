import React, { useCallback } from 'react'
import { Card, CardHeader, CardText, Button, Col, CardBody, ListGroupItem } from 'reactstrap';
import { SortableElement } from 'react-sortable-hoc';

import { connect } from 'react-redux';
import { completeTodo, holdOverTodo } from '../actions /actions';

const SortableTodo = SortableElement(({ value, index, hiddeTodo, removeTodo }) => {

    const completeTodo = useCallback((item) => () => {
        removeTodo(item);
    })

    const disableTodo = useCallback((index) => () => {
        hiddeTodo(index);
    })

    return (
        <ListGroupItem>
            <Card className="border border-info shadow-lg" style={{ opacity: value.disable ? '0.2' : '1' }}>
                <CardHeader className="text-dark">{new Date().toLocaleDateString()}
                    {/* <Button outline color="primary" className="float-right">123</Button> */}
                </CardHeader>
                <CardBody>
                    <CardText className="font-italic text-secondary">{value.item}</CardText>
                    <Button color="danger" className="float-left" onClick={completeTodo(value.item)}>Complete!</Button>
                    <Button outline color="secondary" className="float-right" onClick={disableTodo(index)}>{value.disable ? 'now' : 'after'}</Button>
                </CardBody>
            </Card>
        </ListGroupItem>
    )
})

const mapStateToProps = (state) => {
    return state;
}


const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (item) => {
            dispatch(completeTodo(item))
        },
        hiddeTodo: (index) => {
            dispatch(holdOverTodo(index))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortableTodo);
