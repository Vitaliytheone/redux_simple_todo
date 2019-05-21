import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import SortableTodo from './SortableTodo';
import { Row } from 'reactstrap';

const SortableTodoList = SortableContainer(({ list }) => {
  return (
    <Row>
      {list.map((item, index) =>
        <SortableTodo key={`item-${index}`} index={index} value={item}></SortableTodo>
      )}
    </Row>
  )
})

export default (SortableTodoList);
