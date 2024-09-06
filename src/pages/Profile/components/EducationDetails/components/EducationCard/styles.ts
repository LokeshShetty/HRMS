import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  align-self: stretch;
  border-radius: 12px;
  background: var(--white-color);
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.08);
`;

export const FontStyles = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.1px;
`;

export const Qualification = styled(FontStyles)`
  color: var(--primary-color);
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SubDetails = styled(FontStyles)`
  color: var(--secondary-color);
`;

export const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const QualificationHeader = styled.div`
  display: flex;
  align-items: center;
`;
