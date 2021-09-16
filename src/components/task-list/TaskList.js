import React from 'react';
import { Table, Button } from 'react-bootstrap';

export const TaskList = ({ tasks }) => {
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
                <td>{task.task}</td>
                <td>{task.hr}</td>
                <td>
                  <Button> Mark as not to do</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
