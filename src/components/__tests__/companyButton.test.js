import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const CompanyLink = () => (
  <div>
    <h1>Company Link</h1>
  </div>
);

describe('Company Link', () => {
  test('render React component', () => {
    render(<CompanyLink />);
    expect(screen.getByText('Company Link')).toBeInTheDocument();
  });
});
