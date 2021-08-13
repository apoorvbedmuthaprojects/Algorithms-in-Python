import { fireEvent, render, screen } from '@testing-library/react';
//import App from './App';
import Home from './Home';

//checking for Title 
test('Check for initialization of SearchAndResult components', () => {
  render(<Home />);
  setInterval(()=>{
    const linkElement = screen.getByText('bitcoin');
    expect(linkElement).toBeInTheDocument();
  },3000)
});

test('Check for initialization of Card components', () => {
    render(<Home />);
    setInterval(()=>{
      const linkElement = screen.getByText('ripple');
      expect(linkElement).toBeInTheDocument();
    },3000)
  });
  

