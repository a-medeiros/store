import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 101px;
  background-color: #0f52ba;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 65px;
`;

export const Logo = styled.div`
  display: flex;
`;

export const FirstText = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  color: #ffffff;
  padding: 0;
  margin: 0;
`;

export const SecondaryText = styled.p`
  display: flex;
  align-items: flex-end;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  color: #ffffff;
  margin: 0;
  padding-bottom: 10px;
  padding-left: 5px;
`;

export const CartContainer = styled.div`
  width: 70px;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  margin-right: 88px;
  cursor: pointer;
`;

export const NumberOfItems = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #000000;
  margin: 0px;
`;
