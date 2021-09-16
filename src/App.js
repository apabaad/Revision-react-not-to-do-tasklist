import './App.css';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { AddTaskForm } from './components/add-task-form/AddTaskForm';
import { TaskList } from './components/task-list/TaskList';
import { useState } from 'react';
import { BadTaskList } from './components/task-list/NotToDoTaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [badTasks, setBadTasks] = useState([]);

  const handleOnSubmit = (data) => {
    setTasks([...tasks, data]);
  };

  const totalHrs = tasks.reduce((subTotal, item) => subTotal + +item.hr, 0);

  const markAsBadTask = (i) => {
    setBadTasks([...badTasks, tasks[i]]);
    const tempTasks = tasks.filter((item, index) => index !== i); //removing with filter

    // const tempTasks = [...tasks]
    // tempTasks.splice(i,1) removing with splice
    setTasks(tempTasks);
  };

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
            <TaskList tasks={tasks} markAsBadTask={markAsBadTask} />
          </Col>

          <Col md="6">
            <BadTaskList tasks={tasks} badTasks={badTasks} />
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
};

export default App;
