import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import App from './App';

test('App rendering/navigating', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/about/i), leftClick);

  expect(screen.getByText(/About us/i)).toBeInTheDocument();
});

test('Wrong page', () => {
  const history = createMemoryHistory();
  history.push('/bad/route');
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(screen.getByText(/About us/i)).toBeInTheDocument();
});
