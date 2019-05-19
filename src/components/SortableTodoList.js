import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import SortableTodo from './SortableTodo';
import { Container, Row, Col, ListGroup } from 'reactstrap'

// import { connect } from 'react-redux'


const SortableTodoList = SortableContainer(({ list }) => {
    return (
        <ListGroup>
            {list.map((item, index) =>
                <SortableTodo key={`item-${index}`} index={index} value={item}></SortableTodo>
            )}
        </ListGroup>
    )
})

// const mapStateToProps = (state) => {
//     return state;
// }


export default (SortableTodoList);
