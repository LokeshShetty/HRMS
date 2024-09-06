import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AddEducationButton = styled.div`
  gap: 12px;
  border-radius: 12px;
  background: var(--UI-UI0, #fefefe);
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  padding: 20px;
  align-items: center;
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.1px;
  cursor: pointer;
`;
