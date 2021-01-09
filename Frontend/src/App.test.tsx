import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MyStats header', () => {
  render(<App />);
  const headerElement = screen.getByText(/MyStats/i);
  expect(headerElement).toBeInTheDocument();
});
