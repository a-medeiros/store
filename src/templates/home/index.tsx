import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { getDataFromLocalStorage } from '../../features/cart';
import Header from '../../components/Header';
import Product from '../../components/Product';
import { axiosGET } from '../../utils/axiosApiCall';
import { Container, ProductsSection, ProductsContainer } from './styles';

import { ProductType } from './types';

export default function Home() {
  const [products, setProducts] = useState<ProductType[] | []>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch(getDataFromLocalStorage({ cart }));
    async function getProducts() {
      const res = await axiosGET(
        'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=name&orderBy=DESC'
      );
      setProducts(res.data.products);
      setLoading(false);
    }
    getProducts();
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <ProductsSection>
        {loading ? (
          <div>
            <Spin />
          </div>
        ) : (
          <div>
            {products.length === 0 ? (
              <div>
                <p>Lista de produtos está vazia!</p>
              </div>
            ) : (
              <ProductsContainer>
                {products.map((product: ProductType) => (
                  <Product
                    id={product.id}
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    brand={product.brand}
                    photo={product.photo}
                    price={product.price}
                  />
                ))}
              </ProductsContainer>
            )}
          </div>
        )}
      </ProductsSection>
    </Container>
  );
}
