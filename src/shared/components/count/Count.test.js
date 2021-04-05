import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CountComponent from './CountComponent';


describe('CountComponent', () => {
  const title = "Welcome count";

  it('has correct title', () => {
    render(<CountComponent />);
    expect(screen.getByText(/Hooks/i)).toBeTruthy();
  });

  it('has correct params title', () => {
    render(<CountComponent title={title}/>);
    expect(screen.getByText(/Welcome count/i)).toBeTruthy();
  });

  it('button click +', () => {
    render(<CountComponent title={title}/>);
    const addClick = { button: 0 };
    userEvent.click(screen.getByText('+'), addClick);

    expect(screen.getByText(/Contador de/i)).toBeInTheDocument();
  });

  it('button click -', () => {
    render(<CountComponent title={title}/>);
    const mineClick = { button: 0 };
    userEvent.click(screen.getByText('-'), mineClick);

    expect(screen.queryByText(/Contador de/i)).toBeInTheDocument();
  });
});