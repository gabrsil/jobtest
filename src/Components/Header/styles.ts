import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 20px;
  height: 50px;
  background-color: #000;
`;

export const Wrapper = styled.div`
  max-width: 1250px;
  align-items: center;
  display: flex;
  position: relative;
  height: 100%;
  margin: 0 auto;

  .cart-tooltip {
    position: absolute;
    display: none;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #eeeeee;
    background-color: #fff;
  }

  .cart-box {
    :hover {
      .cart-tooltip {
        display: block;
      }
    }
  }

  .header-menu-box {
    display: none;
  }

  @media (max-width: 700px) {
    .header-logo {
      display: none;
    }

    .header-menu-box {
      display: block;
      cursor: pointer;
      height: 15px;
    }
  }
`;

export const ToggleIcon = styled.div<{ fill: string; height: number }>`
  position: relative;
  width: 28px;
  height: 2px;
  background: #ffff;
  transition: all 0.7s ease;
  :before {
    content: "";
    position: absolute;
    background: #fff;
    margin-top: 10px;
    width: 14px;
    height: 2px;
  }
`;
