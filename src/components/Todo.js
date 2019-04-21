import React, { Component } from 'react'
import { Card, CardTitle, CardText, Button, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { completeTodo } from '../actions /actions';

class Todo extends Component {

    completeTodo = (list) => () => {
        const { removeTodo } = this.props;
        list.filter((item, index) => { })
        console.log(list);
        removeTodo(list);
    }

    render() {
        const { list } = this.props;
        return (
            list.map((item, index) =>
                <Col sm="4" className="mt-3" key={index}>
                    <Card body>
                        <CardTitle>{new Date().toLocaleDateString()}</CardTitle>
                        <CardText>{item}</CardText>
                        <Button color="danger" onClick={this.completeTodo(list)}>Complete!</Button>
                    </Card >
                </Col>
            )
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}


const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (list) => {
            dispatch(completeTodo(list))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
