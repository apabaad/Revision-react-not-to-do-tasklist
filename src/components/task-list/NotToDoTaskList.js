import React from 'react';
import { Button, Table } from 'react-bootstrap';

export const BadTaskList = ({ tasks }) => {
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
          <tr>
            <td></td>
            <td></td>
            <td>
              <Button> Mark as to do</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
