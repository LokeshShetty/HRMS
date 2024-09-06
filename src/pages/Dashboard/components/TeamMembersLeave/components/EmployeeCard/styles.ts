import styled from "styled-components";

export const MainDiv = styled.div`
  border-radius: 12px;
  background: var(--white-color);
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  padding: 16px 12px;
  align-items: center;
  gap: 12px;
  width: 49%;
`;

export const ProfileImage = styled.div`
  border-radius: 8px;
  border: 1px solid var(--UI-UI900, #3d3d3d);
  background: var(--primary-color);
  color: var(--white-color);
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

export const NameMainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameDiv = styled.div`
  color: var(--primary-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.1px;
`;

export const RoleDiv = styled.div`
  color: var(--secondary-color);
  font-weight: 400;
  font-size: 12px;
  font-style: normal;
  line-height: 20px; /* 166.667% */
  letter-spacing: -0.1px;
`;
