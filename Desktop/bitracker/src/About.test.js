import { fireEvent, render, screen } from '@testing-library/react';
import About from './About';
//import App from './App';
//import Home from './Home';

//checking for Title 
test('Check for initialization of About Us Image', () => {
  render(<About />);
  const a=screen.getByTestId('Image')
  expect(a).toBeInTheDocument();
});

test('Check for initialization of About Us Text', () => {
    render(<About />);
    const a=screen.getByTestId('Text')
    expect(a).toBeInTheDocument();
  });
  


