import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

export const SidebarDiv = styled.div`
  flex: 15%;
  border-right: 2px solid #fff;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(253, 253, 253, 0.04) 100%
  );
  border-radius: 20px 0px 0px 20px;
  backdrop-filter: blur(50px);
`;

export const TopBar = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 24px;
  position: sticky;
  top: 0px;
  z-index: 1;
  border-radius: 10px;
  background: transparent;
  backdrop-filter: blur(10px);
  padding: 20px 30px;
`;

export const MainContentDiv = styled.div`
  flex: 85%;
  padding: 28px 35px;
  backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0px 20px 20px 0px;
  overflow: auto;
`;

export const PageTitle = styled.div`
  color: var(--primary-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
