import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  position: relative;

  div.product-info {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p.product-title {
      text-transform: uppercase;
      font-size: 0.9rem;
      width: 25ch;
      display: flex;
      text-align: center;
      height: 37px;
      overflow: hidden;
      justify-content: center;
      text-overflow: ellipsis;
      margin: 5px 0;
      font-weight: bold;
    }

    p.product-price {
      text-transform: uppercase;
      font-weight: bold;
      margin: 10px 0;
      color: #713185;
    }
  }

  div.img-container {
    overflow: hidden;
  }
`;

export const ProductImage = styled.div<{ backgroundImage: string }>`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: contain;
  width: 250px;
  margin: 0 20px;
  background-repeat: no-repeat;
  cursor: pointer;
  height: 300px;
  background-position: center;
  transition: transform 0.2s ease-in;

  :hover {
    transform: scale(2);
  }

  @media (max-width: 1280px) {
    width: 200px;
    height: 250px;
    margin: 0 8px;
  }

  @media (max-width: 650px) {
    width: 300px;
    height: 350px;
    margin: 0 8px;
  }
`;

export const Button = styled.button`
  background-color: #000;
  border: none;
  color: #fff;
  width: 100px;
  height: 38px;
  font-weight: bold;
  font-size: 0.7rem;
  text-transform: uppercase;
  padding: 10px;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #fff;
    color: #000;
    border: 1px solid black;
  }
`;
