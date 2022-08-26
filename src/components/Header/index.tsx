import React from 'react';
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

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo>
          <FirstText>MKS</FirstText>
          <SecondaryText>Sistemas</SecondaryText>
        </Logo>
      </LogoContainer>
      <CartContainer>
        <ShoppingCartOutlined style={{ fontSize: '20px' }} />
        <NumberOfItems>0</NumberOfItems>
      </CartContainer>
    </Container>
  );
}
