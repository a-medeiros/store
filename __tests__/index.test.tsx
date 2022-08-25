import { render, screen } from '@testing-library/react';
import Home from '../pages';
import '@testing-library/jest-dom';

it('teste', () => {
  render(<Home />);

  expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
});
