import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #e5e5e5;
`;

export const ProductsSection = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 217px 217px 217px 217px;
  grid-gap: 31px 22px;

  @media (max-width: 1000px) {
    grid-template-columns: 217px 217px 217px;
  }

  @media (max-width: 745px) {
    grid-template-columns: 217px 217px;
  }

  @media (max-width: 488px) {
    grid-template-columns: 217px;
  }
`;
