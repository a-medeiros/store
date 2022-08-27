import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store/index';
import Cart from '../src/components/Cart/index';
import '@testing-library/jest-dom';

it('if true cart should be visible', () => {
  render(
    <Provider store={store}>
      <Cart isCartOpen setIsCartOpen={undefined} />
    </Provider>
  );
  expect(screen.getByTestId('cart-container')).toHaveStyle('width: 450px');
});

it('if false cart should be closed', async () => {
  render(
    <Provider store={store}>
      <Cart isCartOpen={false} setIsCartOpen={undefined} />
    </Provider>
  );
  expect(screen.getByTestId('cart-container')).toHaveStyle('width: 0px');
});

it('should display the logo and the cart button', () => {
  render(
    <Provider store={store}>
      <Cart isCartOpen setIsCartOpen={undefined} />
    </Provider>
  );

  expect(screen.getByText(/Carrinho de Compras/i)).toBeInTheDocument();
  expect(screen.getByTestId('close-menu')).toBeInTheDocument();
  expect(screen.getByText(/Total:/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Finalizar compra' }));
});
