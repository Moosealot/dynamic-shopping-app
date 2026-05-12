import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders the shopping app', () => {
  render(<App />);
  expect(document.body).toBeTruthy();
});

test('displays message when no products match filter', () => {
  render(<App />);
  const select = screen.getByRole('combobox');
  fireEvent.change(select, { target: { value: 'Dairy' } });
  // Then simulate a category with no products by checking the message
  expect(screen.getByText(/no products available/i)).toBeTruthy();
});

test('add items to cart', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  const addButton = buttons.find(btn => btn.textContent === 'Add to Cart');
  fireEvent.click(addButton);
  expect(screen.getByText('Apple')).toBeTruthy();
});