import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class AddTask extends React.Component {
    state = {
        value: ""
    }

    onChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        const {addNewTask}= this.props;
        addNewTask(this.state.value)
        this.setState({ value: "" })
        event.preventDefault();
    }

    render() {

        return (
            <div className="container-fluid">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label className="boldFont">
                            Add Task
                    </Form.Label>
                        <Col sm={4}>
                            <Form.Control type="text" value={this.state.value} onChange={(event) => this.onChange(event)} />
                        </Col>
                    </Form.Group>
                </form>
            </div>
        )
    }
}


