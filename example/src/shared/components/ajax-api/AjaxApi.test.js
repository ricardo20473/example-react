import React from 'react';
import { screen, render } from '@testing-library/react';

import AjaxApiComponent from './AjaxApiComponent';

beforeEach(() => render(<AjaxApiComponent />));

describe('AjaxApiComponent', () => {
  it('has correct params title', () => {
    expect(screen.getByText(/Peticiones/i)).toBeTruthy();
  });
});