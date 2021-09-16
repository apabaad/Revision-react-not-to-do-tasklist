import React from 'react';
import { Button, Table, Alert } from 'react-bootstrap';
import { DisplayAlert } from '../alert/DisplayAlert';

export const BadTaskList = ({ badTasks, markAsGoodTask, badHrs }) => {
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
                  <Button
                    onClick={() => {
                      return markAsGoodTask(index);
                    }}
                  >
                    Mark as to do
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <DisplayAlert text={`You can save ${badHrs}hrs/wk.`} variant="danger" />
    </div>
  );
};
