import React from 'react';
import { render } from 'react-dom';
import List from './List';

const rootElement = document.querySelector('#app');
if (rootElement) {
  render(<List />, rootElement);
}