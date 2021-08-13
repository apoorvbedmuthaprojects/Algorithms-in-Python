import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

//checking for Title 
test('Check for title', () => {
  render(<App />);
  const linkElement = screen.getByText('Bitracker');
  expect(linkElement).toBeInTheDocument();
});

//checking for about
test('Check for about', () => {
  render(<App />);
  const linkElement = screen.getByText('About');
  expect(linkElement).toBeInTheDocument();
});

test('Check for dropdown', () => {
  render(<App />);
  const linkElement = screen.getByTestId('Select');
  expect(linkElement).toBeInTheDocument();
});
test('Check for dropdown', () => {
  render(<App />);
  const linkElement = screen.getByTestId('Select');
  expect(linkElement).toBeInTheDocument();
});




