import React from 'react';
import { CloseOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import Image from 'next/image';
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

import { Props } from './types';

export default function Cart({ isCartOpen, setIsCartOpen }: Props) {
  function closeCart() {
    setIsCartOpen(false);
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
        <Product>
          <ImageContainer>
            <Image
              alt="product"
              width={100}
              height={95}
              style={{ borderRadius: '8px' }}
              src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp"
            />
          </ImageContainer>
          <ProductInfo>
            <ProductName>Macbook Air</ProductName>
            <CartQuantity>
              <CartQuantityTitle>Qtd.</CartQuantityTitle>
              <QuantityContainer>
                <QuantityButton>
                  <PlusOutlined />
                </QuantityButton>
                <QuantityNumber>1</QuantityNumber>
                <QuantityButton>
                  <MinusOutlined />
                </QuantityButton>
              </QuantityContainer>
            </CartQuantity>
            <Price>R$ 6.500</Price>
            <Close size="18px" position="absolute">
              <CloseOutlined
                style={{ fontSize: '12px', color: 'white', padding: 0 }}
              />
            </Close>
          </ProductInfo>
        </Product>
        <Product>
          <ImageContainer>
            <Image
              alt="product"
              width={100}
              height={95}
              style={{ borderRadius: '8px' }}
              src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp"
            />
          </ImageContainer>
          <ProductInfo>
            <ProductName>Macbook Air</ProductName>
            <CartQuantity>
              <CartQuantityTitle>Qtd.</CartQuantityTitle>
              <QuantityContainer>
                <QuantityButton>
                  <PlusOutlined />
                </QuantityButton>
                <QuantityNumber>1</QuantityNumber>
                <QuantityButton>
                  <MinusOutlined />
                </QuantityButton>
              </QuantityContainer>
            </CartQuantity>
            <Price>R$ 6.500</Price>
            <Close size="18px" position="absolute">
              <CloseOutlined
                style={{ fontSize: '12px', color: 'white', padding: 0 }}
              />
            </Close>
          </ProductInfo>
        </Product>
      </ProductsContainer>
    </Container>
  );
}
