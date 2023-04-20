import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const NavBar = () => (
  <div>
    <h1>Navigation Bar</h1>
  </div>
);

describe('Renders Navigation Bar', () => {
  test('render React component', () => {
    render(<NavBar />);
    expect(screen.getByText('Navigation Bar')).toBeInTheDocument();
  });
});
