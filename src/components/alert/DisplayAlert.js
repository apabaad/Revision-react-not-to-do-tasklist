import { Alert } from 'react-bootstrap';
import React from 'react';

export const DisplayAlert = ({ variant, text }) => {
  return <Alert variant={variant}>{text}</Alert>;
};
