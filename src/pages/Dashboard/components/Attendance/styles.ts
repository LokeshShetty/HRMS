import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  gap: 67px;
`;
export const LeftDiv = styled.div`
  flex: 60%;
`;
export const RightDiv = styled.div`
  flex: 40%;
  display: flex;
  justify-content: center;
`;
export const Label = styled.div`
  color: var(--primary-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: -0.05px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-bottom: 32px;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
