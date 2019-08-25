import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskCount from './components/TaskCount';
import { connect } from 'react-redux';
import { addTask } from './actions'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  addNewTask = (taskVal) => {
    const lastId = this.props.cards.length - 1;
    const todoList = this.props.cards.filter((task) => {
      return task.status === 0;
    });

    const lasTodoItem = todoList.length - 1;
    const data = {
      id: lastId + 1,
      text: taskVal,
      status: 0,
      order: lasTodoItem + 1
    }

    const { dispatch } = this.props;
    dispatch(addTask(data))
  }



  render() {
    const todoList = this.props.cards.filter((task) => {
      return task.status === 0;
    });
    const inProgressList = this.props.cards.filter((task) => {
      return task.status === 1;
    })
    const completedList = this.props.cards.filter((task) => {
      return task.status === 2;
    })

    return (
      <div className="container-fluid">

        <AddTask addNewTask={this.addNewTask} />

        <Row>
          <Col xs={12} className="alignRight">
            <div className="alignRight">
              <TaskCount taskCount={this.props.cards.length} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4}>
            <TaskList refr={0} cardName="Todo" taskCount={5} listData={todoList} />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <TaskList refr={1} cardName="In Progress" taskCount={3} listData={inProgressList} />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <TaskList refr={2} cardName="Done" taskCount={6} listData={completedList} />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards
});


export default connect(mapStateToProps)(App);