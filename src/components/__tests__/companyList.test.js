import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const CompaniesList = () => (
  <div>
    <h1>Companies</h1>
  </div>
);

describe('List of Companies', () => {
  test('render React component', () => {
    render(<CompaniesList />);
    expect(screen.getByText('Companies')).toBeInTheDocument();
  });
});
