import './App.css';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { AddTaskForm } from './components/add-task-form/AddTaskForm';
import { TaskList } from './components/task-list/TaskList';
import { useState } from 'react';
import { BadTaskList } from './components/task-list/NotToDoTaskList';
import { DisplayAlert } from './components/alert/DisplayAlert';

const App = () => {
  const hrsInWeek = 168;

  const [tasks, setTasks] = useState([]);
  const [badTasks, setBadTasks] = useState([]);
  const [hrsFinished, setHrsFinished] = useState(false);

  const taskHrs = tasks.reduce((subTotal, item) => subTotal + +item.hr, 0);
  const badHrs = badTasks.reduce((subTotal, item) => subTotal + +item.hr, 0);

  const handleOnSubmit = (data) => {
    if (taskHrs + +data.hr > hrsInWeek) {
      setHrsFinished(true);
      return;
    }
    setTasks([...tasks, data]);
  };

  const totalHrs = taskHrs + badHrs;

  const markAsBadTask = (i) => {
    setBadTasks([...badTasks, tasks[i]]);
    const tempTasks = tasks.filter((item, index) => index !== i); //removing with filter
    setTasks(tempTasks);
    // removing with splice
    // const tempTasks = [...tasks]
    // tempTasks.splice(i,1)
  };

  const markAsGoodTask = (i) => {
    // bring the removed bad task to good task list
    setTasks([...tasks, badTasks[i]]);

    // remove
    const tempArg = [...badTasks];
    tempArg.splice(i, 1);
    setBadTasks(tempArg);
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
        {hrsFinished && (
          <DisplayAlert
            text="You do not have enough hours this week."
            variant="warning"
          />
        )}
        <AddTaskForm handleSubmit={handleOnSubmit} />
        <hr />
        <Row>
          <Col md="6">
            <TaskList tasks={tasks} markAsBadTask={markAsBadTask} />
          </Col>

          <Col md="6">
            <BadTaskList
              badTasks={badTasks}
              markAsGoodTask={markAsGoodTask}
              badHrs={badHrs}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <DisplayAlert text={`Total hrs: ${totalHrs}hrs`} variant="info" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
