import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const initialFormData = {
  task: '',
  hr: 0,
};

export const AddTaskForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Row>
        <Col md={7}>
          <Form.Control
            name="task"
            placeholder="task"
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col>
          <Form.Control
            name="hr"
            type="number"
            placeholder="hour"
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col>
          <Button type="submit">Add Task</Button>
        </Col>
      </Row>
    </Form>
  );
};
