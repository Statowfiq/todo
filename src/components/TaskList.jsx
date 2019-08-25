import React from 'react';
import '../App.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import TaskCount from './TaskCount'
import { connect } from 'react-redux';
import { updateTask } from '../actions'

class TaskList extends React.Component {
    constructor(props) {
        super(props);
      
    }

    onDragOver = (e) => {
        e.preventDefault();
    }
    onDragStart = (e, id) => {
        console.log('drag strt', id);
        e.dataTransfer.setData("id", id)
    }

    onDrop = (e, status) => {
        let id = e.dataTransfer.getData("id");
        console.log(id)
        console.log('dropped', status)

        console.log('array', this.props.cards)
        let updatedArray = this.props.cards;
        for (let i = 0; i < this.props.cards.length; i++) {

            if (i === Number(id)) {
                console.log(this.props.cards[i].text)
                updatedArray[i] = {... updatedArray[i],
                    status,
                    
                }
            }
        }
        console.log('u[dated array', updatedArray)

        const { dispatch } = this.props;
        dispatch(updateTask(updatedArray))
    }

    render() {
        const { cardName, listData, refr } = this.props;
        return (
            <Container>
                <Row className="listHead">
                    <Col xs={9}>
                        <h5 className="listName">
                            {cardName}
                        </h5>
                    </Col>
                    <Col xs={3}>
                        <TaskCount taskCount={listData.length} />
                    </Col>

                </Row>
                {
                    listData.map(tasks => {
                        return (<Row className="lists" key={tasks.id} draggable
                            onDragOver={(e) => this.onDragOver(e)}
                            onDragStart={(e) => this.onDragStart(e, tasks.id)}
                            onDrop={(e) => { this.onDrop(e, refr) }}


                        >
                            <Col>{tasks.text}</Col>
                        </Row>)
                    })
                }

            </Container>

        );
    }
}

const mapStateToProps = state => ({
    cards: state.cards
});


export default connect(mapStateToProps)(TaskList);