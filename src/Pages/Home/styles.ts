import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  display: flex;
  width: 1280px;
  margin: 25px auto;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;

  @media (max-width: 1280px) {
    width: 100%;
  }

  @media (max-width: 650px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
