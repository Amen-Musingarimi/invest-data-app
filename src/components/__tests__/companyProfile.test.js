import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const CompanyProfile = () => (
  <div>
    <h1>Profile</h1>
  </div>
);

describe('Renders Company Profile', () => {
  test('render React component', () => {
    render(<CompanyProfile />);
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
});
