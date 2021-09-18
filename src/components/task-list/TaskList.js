import React from 'react';
import { Table, Button } from 'react-bootstrap';

export const TaskList = ({
  tasks,
  markAsBadTask,
  handleOnTaskClicked,
  taskToDelete,
}) => {
  return (
    <div>
      <h2>Task List</h2>
      <hr />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => {
            return (
              <tr key={i}>
                <td>
                  <input
                    type="checkbox"
                    defaultValue={i}
                    checked={taskToDelete.includes(i)}
                    onClick={handleOnTaskClicked}
                  />{' '}
                  <label>{task.task}</label>
                </td>
                <td>{task.hr}</td>
                <td>
                  <Button
                    onClick={() => {
                      return markAsBadTask(i);
                    }}
                  >
                    Mark as not to do
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
