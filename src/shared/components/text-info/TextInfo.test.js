import React from 'react';
import { screen, render } from '@testing-library/react';

import TextInfoComponent from './TextInfoComponent';

describe('TextInfoComponent', () => {
  const title = "Welcome";
  const description = "Info description";

  it('has correct params title and description', () => {
    render(<TextInfoComponent title={title} description={description} />);
    expect(screen.getByText('Welcome')).toBeTruthy();
    expect(screen.getByText('Info description')).toBeTruthy();
  });
});