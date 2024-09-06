import styled from "styled-components";

export const MainDiv = styled.div`
  border-radius: 12px;
  border: 1px solid var(--UI-UI30, #efefef);
  background: var(--white-color);
  height: 44px;
  padding: 8px;
  align-items: center;
  display: flex;
  gap: 4px;
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.08);
  justify-content: space-between;
  width: 150%;
`;

export const SubDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AttachmentName = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.1px;
  color: var(--primary-color);
`;
