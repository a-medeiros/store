import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../src/store/index';
import Header from '../src/components/Header/index';
import '@testing-library/jest-dom';
import { Container } from '../src/components/Cart/styles';

it('should display the logo and the cart button', () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  expect(screen.getByText(/MKS/i)).toBeInTheDocument();
  expect(screen.getByText(/Sistema/i)).toBeInTheDocument();
  expect(screen.getByTestId('cart-button')).toBeInTheDocument();
});

it('should display the cart when user clicks the cart button', async () => {
  const user = userEvent.setup();
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  const cartButton = screen.getByTestId('cart-button');
  await user.click(cartButton);

  render(<Container data-testid="close-menu" isOpen />);
  expect(screen.getByTestId('cart-container')).toHaveStyle('width: 450px');
});
