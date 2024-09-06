import * as styled from "./styles";
import { ChevronDown } from "lucide-react";

const ProfileInfo = () => {
  return (
    <styled.MainDiv className="profileInfo-main-div">
      <styled.ProfileImage className="profileInfo-image">L</styled.ProfileImage>
      <styled.NameMainDiv className="profileInfo-name-main-div">
        <styled.NameDiv className="profileInfo-name-div">
          Lokesh Shetty
        </styled.NameDiv>
        <styled.RoleDiv className="profileInfo-role-div">
          Frontend Developer
        </styled.RoleDiv>
      </styled.NameMainDiv>
      <styled.Dropdown>
        <ChevronDown color="#3d3d3d" />
      </styled.Dropdown>
    </styled.MainDiv>
  );
};

export default ProfileInfo;
