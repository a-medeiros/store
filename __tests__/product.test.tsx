import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store/index';
import Product from '../src/components/Product/index';
import '@testing-library/jest-dom';

it('should display the product', () => {
  const product = {
    id: '1',
    name: 'Headset Cloud Stinger',
    description: 'O HyperX Cloud Stinger™ é o',
    brand: 'HyperX',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
    price: '600.00'
  };
  render(
    <Provider store={store}>
      <Product
        id={product.id}
        name={product.name}
        description={product.description}
        brand={product.brand}
        photo={product.photo}
        price={product.price}
      />
    </Provider>
  );

  expect(screen.getByText(product.name)).toBeInTheDocument();
  expect(screen.getByText(product.description)).toBeInTheDocument();
  expect(screen.getByText(/600/i)).toBeInTheDocument();
  expect(screen.getByAltText(product.name)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Comprar' })).toBeInTheDocument();
});
