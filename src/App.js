import './App.css';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { AddTaskForm } from './components/add-task-form/AddTaskForm';
import { TaskList } from './components/task-list/TaskList';
import { useState } from 'react';
import { BadTaskList } from './components/task-list/NotToDoTaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleOnSubmit = (data) => {
    setTasks([...tasks, data]);
  };

  const totalHrs = tasks.reduce((subTotal, item) => subTotal + +item.hr, 0);

  return (
    <div className="wrapper text-center">
      <Container>
        <Row className="mt-5 ">
          <Col>
            <h1>Not To Do Task List</h1>
          </Col>
        </Row>
        <hr />
        <AddTaskForm handleSubmit={handleOnSubmit} />
        <hr />
        <Row>
          <Col md="6">
            <TaskList tasks={tasks} />
          </Col>

          <Col md="6">
            <BadTaskList tasks={tasks} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert>Total hrs: {totalHrs}hrs</Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
