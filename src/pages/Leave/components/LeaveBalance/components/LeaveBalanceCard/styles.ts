import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  border: 1px solid var(--UI-UI30, #efefef);
  background: var(--white-color);
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.08);
  padding: 12px 20px;
`;

export const LeaveType = styled.div`
  color: var(--primary-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.1px;
`;

export const LeavesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Leaves = styled.div`
  color: var(--theme-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
  letter-spacing: -0.1px;
`;

export const SubDiv = styled.div`
  color: var(--UI-UI400, #757575);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.1px;
`;
