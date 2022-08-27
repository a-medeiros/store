import React from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { addToCart } from '../../features/cart';
import {
  CardHeader,
  CardDescription,
  Description,
  ProductName,
  PriceContainer,
  ProductPrice,
  CardAntd,
  ButtonAntd,
  ButtonContainer
} from './styles';
import convertToBR from '../../utils/convertToBR';

import { Props } from './types';

export default function Product({
  id,
  name,
  description,
  brand,
  photo,
  price
}: Props) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch(addToCart({ id, name, description, brand, photo, price, cart }));
  }

  return (
    <CardAntd
      cover={<Image width={140} height={150} alt="example" src={photo} />}
    >
      <CardHeader>
        <ProductName>{name}</ProductName>
        <PriceContainer>
          <ProductPrice>{convertToBR(price)}</ProductPrice>
        </PriceContainer>
      </CardHeader>
      <CardDescription>
        <Description>{description}</Description>
      </CardDescription>
      <ButtonContainer onClick={() => handleAddToCart()}>
        <ButtonAntd>Comprar</ButtonAntd>
      </ButtonContainer>
    </CardAntd>
  );
}
