import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ClockComponent from './ClockComponent';

beforeEach(() => render(<ClockComponent />));

describe('ClockComponent', () => {
  it('has correct params title', () => {
    expect(screen.getByText('Reloj con Hooks')).toBeTruthy();
  });

  it('button click Play', () => {
    const visibleClick = { button: 0 };
    userEvent.click(screen.getByText(/Play/i), visibleClick);

    expect(screen.getByText(/Time/i)).toBeVisible();
  });

  it('button click Stop', () => {
    const hiddenClick = { button: 0 };
    userEvent.click(screen.getByText(/Stop/i), hiddenClick);
    expect(screen.queryByText(/Time/i)).toBeNull();
  });
});