import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Battleship/);
  expect(titleElement).toBeInTheDocument();
});
