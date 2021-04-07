import React from 'react';
import { screen, render } from '@testing-library/react';

import Contact from './Contact';

beforeEach(() => render(<Contact />));

describe('Contact', () => {
  it('has correct params title', () => {
    expect(screen.getByText('Contact')).toBeTruthy();
  });
});