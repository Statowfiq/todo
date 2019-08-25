import React from 'react';
import '../App.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

class TaskCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { taskCount } = this.props;
        return (
          
                <div className="taskCountContainer">
                    <Row>
                        <Col className="boldFont" >{taskCount}</Col>
                    </Row>
                    <Col>TASKS </Col>
                </div>
        

        );
    }
}


export default TaskCount;