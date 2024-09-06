import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
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
  font-weight: 500;
  font-size: 14px;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.1px;
`;

export const RoleDiv = styled.div`
  color: var(--secondary-color);
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.1px;
`;

export const Dropdown = styled.div`
  cursor: pointer;
`;
