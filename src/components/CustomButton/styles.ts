import styled from "styled-components";

export interface Props {
  type: number;
}

export const MainDiv = styled.div<Props>`
  cursor: pointer;
  border-radius: 20px;
  border: ${({ type }) =>
    type === 1 ? "1px solid #fa6e65" : "1px solid transparent"};
  background: #fefefe;
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.12);
  padding: 9px 26px;
  box-sizing: border-box;

  &:hover {
    border: 1px solid #fa6e65;
    background: linear-gradient(90deg, #fa6e65 0%, #ff9d2a 100%);

    div {
      background: var(--white-color);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  div {
    background: linear-gradient(96deg, #fa6e65 0.33%, #ff9d2a 96.41%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ButtonTitle = styled.div<Props>`
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
