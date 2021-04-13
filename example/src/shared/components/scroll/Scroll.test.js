import React from 'react';
import { screen, render } from '@testing-library/react';

import ScrollHooks from './ScrollComponent';

describe('ScrollHooks', () => {
  it('has correct params scroll', () => {
    render(<ScrollHooks />);
    expect(screen.getByText(/Scroll/i)).toBeTruthy();
  });
});
