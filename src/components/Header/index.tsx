import React, { useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import {
  Container,
  LogoContainer,
  FirstText,
  SecondaryText,
  Logo,
  CartContainer,
  NumberOfItems
} from './styles';
import Cart from '../Cart';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function openCart() {
    setIsCartOpen(true);
  }

  return (
    <Container>
      <LogoContainer>
        <Logo>
          <FirstText>MKS</FirstText>
          <SecondaryText>Sistemas</SecondaryText>
        </Logo>
      </LogoContainer>
      <CartContainer onClick={() => openCart()}>
        <ShoppingCartOutlined style={{ fontSize: '20px' }} />
        <NumberOfItems>0</NumberOfItems>
      </CartContainer>
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </Container>
  );
}
