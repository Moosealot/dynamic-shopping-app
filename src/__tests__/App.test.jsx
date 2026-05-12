import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the shopping app', () => {
  render(<App />);
  expect(document.body).toBeTruthy();
});
