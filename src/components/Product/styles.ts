import styled from 'styled-components';
import { Card } from 'antd';

export const CardAntd = styled(Card)`
  width: 217px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  div.ant-card-body {
    padding: 0px;
    width: 217px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 14px;
  height: 60px;
`;

export const ProductName = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #2c2c2c;
  margin: 0;
  padding: 0;
  width: 112px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 68px;
  height: 23px;
  border-radius: 5px;
  background: #373737;
  margin-top: 5px;
`;

export const ProductPrice = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  color: #ffffff;
`;

export const CardDescription = styled.div`
  padding: 2px 14px;
`;

export const Description = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #2c2c2c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 192px;
  height: 25px;
`;

export const ButtonContainer = styled.div`
  width: 217px;
`;

export const ButtonAntd = styled.button`
  background-color: #0f52ba;
  border: 1px solid #0f52ba;
  border-radius: 0px 0px 8px 8px;
  width: 100%;
  color: white;
  height: 33px;
  cursor: pointer;
`;
