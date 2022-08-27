import styled from 'styled-components';

import { ContainerProps } from './types';

export const Container = styled.div<ContainerProps>`
  position: absolute;
  right: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  width: ${props => (props.isOpen ? '450px' : '0px')};
  min-height: 100%;
  background-color: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  transition: width 0.2s;
  overflow: hidden;

  @media (max-width: 516px) {
    width: ${props => (props.isOpen ? '100%' : '0px')};
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

export const CartTitle = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  color: #ffffff;
  width: 180px;
  padding: 0;
  margin: 0;
`;

interface CloseProps {
  position?: string;
  size?: string;
}

export const Close = styled.div<CloseProps>`
  position: ${props => props.position};
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border-radius: 50px;
  width: ${props => props.size || '34px'};
  height: ${props => props.size || '34px'};
  cursor: pointer;
`;

export const DeleteProduct = styled.div<CloseProps>`
  position: ${props => props.position};
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border-radius: 50px;
  width: ${props => props.size || '34px'};
  height: ${props => props.size || '34px'};
  cursor: pointer;

  @media (max-width: 440px) {
    display: none;
  }
`;

export const DeleteProduct2 = styled.div<CloseProps>`
  position: ${props => props.position};
  right: 0;
  top: 0;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border-radius: 50px;
  width: ${props => props.size || '34px'};
  height: ${props => props.size || '34px'};
  cursor: pointer;

  @media (max-width: 440px) {
    display: flex;
  }
`;

export const ProductsContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Product = styled.div`
  position: relative;
  width: 379px;
  height: 95px;
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 440px) {
    width: 70%;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100%;

  @media (max-width: 440px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 95px;
`;

export const ProductName = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #2c2c2c;
  width: 105px;
  padding: 0;
  margin: 0;

  @media (max-width: 440px) {
    text-align: center;
    padding: 5px;
  }
`;

export const CartQuantity = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const CartQuantityTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: #000000;
  margin: 0;
  padding: 0;
`;

export const QuantityContainer = styled.div`
  background: #ffffff;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  width: 65px;
  height: 35px;
  display: flex;
  justify-content: center;
`;

export const QuantityButton = styled.button`
  background: #ffffff;
  border: none;
  border-radius: 4px;
  align-content: center;
  width: 20px;
  cursor: pointer;
`;

export const QuantityNumber = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  background: #ffffff;
  border-left: 0.2px solid #bfbfbf;
  border-right: 0.2px solid #bfbfbf;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  margin: 0;
  padding: 0;
`;

export const Price = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #000000;
  padding: 0;
  margin: 0;

  @media (max-width: 440px) {
    padding: 10px;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 30px;
`;

export const TotalText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;
`;

export const BuyButtonContainer = styled.div`
  height: 80px;
  width: 450px;
`;

export const BuyButton = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;
  width: 100%;
  height: 80px;
  background: #000000;
  cursor: pointer;
`;
