import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { AddTaskForm } from './components/add-task-form/AddTaskForm';
import { TaskList } from './components/task-list/TaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleOnSubmit = (data) => {
    setTasks([...tasks, data]);
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
            <h2>Task List</h2>
          </Col>
          <Col md="6">
            <h2>Bad Task List</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
