import React from 'react';
import { Button, Table } from 'react-bootstrap';

export const BadTaskList = ({ badTasks }) => {
  return (
    <div>
      <h2>Bad Task List</h2>
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
          {badTasks.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.hr}</td>
                <td>{item.task}</td>
                <td>
                  <Button> Mark as to do</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
