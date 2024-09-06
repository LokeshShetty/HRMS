import { Outlet, useRouterState } from "@tanstack/react-router";
import * as styled from "./styles";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import Sidebar from "./components/Sidebar/Sidebar";
import { capitalizeFirstLetter } from "../../utils/Utilities";

const Layout = () => {
  const { location } = useRouterState();
  return (
    <styled.MainDiv>
      <styled.SidebarDiv>
        <Sidebar />
      </styled.SidebarDiv>
      <styled.MainContentDiv>
        <styled.TopBar>
          <styled.PageTitle className="layout-page-title">
            {capitalizeFirstLetter(location?.pathname?.replace("/", ""))}
          </styled.PageTitle>
          <ProfileInfo />
        </styled.TopBar>
        <Outlet />
      </styled.MainContentDiv>
    </styled.MainDiv>
  );
};

export default Layout;
