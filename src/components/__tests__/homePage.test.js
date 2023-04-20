import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const HomePage = () => (
  <div>
    <h1>Home</h1>
  </div>
);

describe('Renders Home Page', () => {
  test('render React component', () => {
    render(<HomePage />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
