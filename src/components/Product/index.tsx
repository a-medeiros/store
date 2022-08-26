import React from 'react';
import Image from 'next/image';
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

import { Props } from './types';

export default function Product({
  id,
  name,
  description,
  brand,
  photo,
  price
}: Props) {
  function convertToBR(value: string) {
    const newValue = parseFloat(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0
    });
    return newValue;
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
      <ButtonContainer>
        <ButtonAntd>Comprar</ButtonAntd>
      </ButtonContainer>
    </CardAntd>
  );
}
