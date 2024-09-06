import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  padding: 32px 28px;
  border-radius: 20px;
  background: rgba(254, 254, 254, 0.7);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(2px);
  justify-content: space-between;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const Left = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  gap: 12px;
`;

export const Avatar = styled.div`
  border-radius: 8px;
  border: 1px solid var(--UI-UI900, #3d3d3d);
  background: var(--UI-UI900, #3d3d3d);
  display: flex;
  padding: 16px 28px;
  justify-content: center;
  align-items: center;
  color: var(--white-color, #fefefe);
  font-size: 32px;
  font-weight: 500;
  line-height: 40px; /* 125% */
  letter-spacing: -0.8px;
`;

export const ProfileDiv = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

export const FontStyles = styled.div`
  line-height: normal;
  font-size: 14px;
  font-style: normal;
`;

export const NameDiv = styled(FontStyles)`
  color: var(--primary-color);
  font-weight: 600;
`;

export const RoleDiv = styled(FontStyles)`
  color: var(--secondary-color);
  font-weight: 500;
`;
