import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { RootState } from '../../store';
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
  const userCart = useSelector((state: RootState) => state.cart.value);

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
        <NumberOfItems>{userCart?.length}</NumberOfItems>
      </CartContainer>
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </Container>
  );
}
