import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

export const Header = styled.div`
  color: var(--secondary-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 20px;
`;

export const Label = styled.div`
  color: var(--secondary-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: -0.05px;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 40%;
`;

export const SubDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const InputDivs = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 52px;
  width: 50%;
`;
