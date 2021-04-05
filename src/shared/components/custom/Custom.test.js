import React from 'react';
import { screen, render, act } from '@testing-library/react';

import CustomComponent from './CustomComponent';

describe('CustomComponent', () => {
  it('has correct params', () => {
    render(<CustomComponent />);
    expect(screen.getByText(/Hooks/i)).toBeTruthy();

    act(() => {
      expect(screen.getAllByTestId('list')).toBeTruthy();
    })
  });
});
