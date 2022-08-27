import React from 'react';
import { CloseOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { removeFromCart, increment, decrement } from '../../features/cart';
import { RootState } from '../../store';
import {
  CartQuantity,
  CartQuantityTitle,
  CartTitle,
  Close,
  Container,
  HeaderContainer,
  ImageContainer,
  Price,
  Product,
  ProductInfo,
  ProductName,
  ProductsContainer,
  QuantityButton,
  QuantityContainer,
  QuantityNumber
} from './styles';
import convertToBR from '../../utils/convertToBR';

import { Props } from './types';

export default function Cart({ isCartOpen, setIsCartOpen }: Props) {
  const userCart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  function closeCart() {
    setIsCartOpen(false);
  }

  function handleRemoveFromCart(index: number) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch(removeFromCart({ cart, index }));
  }

  function handleIncrement(index: number) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch(increment({ cart, index }));
  }

  function handleDecrement(index: number) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch(decrement({ cart, index }));
  }

  return (
    <Container isOpen={isCartOpen}>
      <HeaderContainer>
        <CartTitle>Carrinho de Compras</CartTitle>
        <Close onClick={() => closeCart()}>
          <CloseOutlined style={{ fontSize: '20px', color: 'white' }} />
        </Close>
      </HeaderContainer>
      <ProductsContainer>
        {userCart.length === 0 ? (
          <div>
            <p style={{ color: 'white' }}>Seu carrinho está vazio!</p>
          </div>
        ) : (
          <>
            {userCart.map((item, index: number) => (
              <Product key={item.name}>
                <ImageContainer>
                  <Image
                    alt="product"
                    width={100}
                    height={95}
                    style={{ borderRadius: '8px' }}
                    src={item.photo}
                  />
                </ImageContainer>
                <ProductInfo>
                  <ProductName>{item.name}</ProductName>
                  <CartQuantity>
                    <CartQuantityTitle>Qtd.</CartQuantityTitle>
                    <QuantityContainer>
                      <QuantityButton onClick={() => handleIncrement(index)}>
                        <PlusOutlined />
                      </QuantityButton>
                      <QuantityNumber>{item.quantity}</QuantityNumber>
                      <QuantityButton onClick={() => handleDecrement(index)}>
                        <MinusOutlined />
                      </QuantityButton>
                    </QuantityContainer>
                  </CartQuantity>
                  <Price>{convertToBR(item.price)}</Price>
                  <Close
                    size="18px"
                    position="absolute"
                    onClick={() => handleRemoveFromCart(index)}
                  >
                    <CloseOutlined
                      style={{ fontSize: '12px', color: 'white', padding: 0 }}
                    />
                  </Close>
                </ProductInfo>
              </Product>
            ))}
          </>
        )}
      </ProductsContainer>
    </Container>
  );
}
