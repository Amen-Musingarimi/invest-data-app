import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Search = () => (
  <div>
    <h1>Search</h1>
  </div>
);

describe('Renders Search', () => {
  test('render React component', () => {
    render(<Search />);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});
