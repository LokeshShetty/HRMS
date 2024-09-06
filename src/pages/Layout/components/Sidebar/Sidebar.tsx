import "./styles.css";
import { images } from "../../../../constants";
import { Briefcase, LayoutDashboard, UserRound } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";

const Sidebar = () => {
  type TabItem = {
    tabName: string;
    icon: ReactElement; // You can replace this with the actual type of your iconsw
    to: string;
  };
  const tabs = [
    {
      tabName: "Dashboard",
      icon: <LayoutDashboard className="sidebar-tab-icon" />,
      to: "/dashboard",
    },
    {
      tabName: "Profile",
      icon: <UserRound className="sidebar-tab-icon" />,
      to: "/profile",
    },
    {
      tabName: "Leave",
      icon: <Briefcase className="sidebar-tab-icon" />,
      to: "/leave",
    },
  ];

  return (
    <div className="sidebar-main-div">
      <img
        className="sidebar-company-logo"
        alt="company-logo"
        src={images.companyLogo}
      />
      <div className="sidebar-tabs">
        {tabs?.map((arr: TabItem, index) => (
          <Link
            key={index}
            to={arr?.to}
            activeProps={{
              className: "sidebar-active-tab",
            }}
            inactiveProps={{
              className: "sidebar-inactive-tab",
            }}
          >
            {arr?.icon}
            <div className="sidebar-tab-name">{arr?.tabName}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
