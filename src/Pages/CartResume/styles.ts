import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  padding: 10px;

  img.product-img {
    width: 70px;
    height: 70px;
  }
`;

export const Wrapper = styled.div`
  width: 1180px;
  display: flex;
  padding: 5px;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    margin: 10px 0;
  }

  @media (max-width: 1180px) {
    width: 950px;
  }

  @media (max-width: 975px) {
    width: 100%;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: row;

  @media (max-width: 975px) {
    flex-direction: column;
  }
`;

export const CartArea = styled.div`
  margin: 0 auto;
  width: 65%;

  @media (max-width: 975px) {
    width: 100%;
  }
`;

export const ProductImage = styled.div<{ bgImage: string }>`
  width: 100px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
`;

export const CartContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;

  select.qtd-option {
    height: 30px;
    border-radius: 5px;
    border-color: #d1d1d1;
    padding: 2px;
    width: 45px;
  }

  p.product-price {
    font-weight: 500;
  }

  div.remove-product {
    cursor: pointer;
    transition: 0.2s;

    :hover {
      transform: scale(1.3);
    }
  }
`;

export const PriceResume = styled.div`
  width: 35%;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  padding: 20px;

  p.resume-title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  div.price-line {
    display: flex;
    padding: 0 30px 1px;
    justify-content: space-between;
    margin: 20px 0;
    p ~ p {
      font-weight: bold;
    }
  }

  div.total-price-line {
    display: flex;
    margin: 20px 0;
    padding: 10px 30px;
    border-top: 1px solid #d4d4d4;
    justify-content: space-between;

    p ~ p {
      font-weight: 700;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 975px) {
    width: 100%;
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  @media (max-width: 975px) {
    padding: 20px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 90px;
  padding: 20px 10px;

  p.product-title {
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 25ch;
    height: 20px;
    font-size: 1.1rem;
  }

  p.product-size {
    font-size: 0.9rem;
    color: #404040;
  }

  @media (max-width: 975px) {
    width: 200px;
  }
`;
