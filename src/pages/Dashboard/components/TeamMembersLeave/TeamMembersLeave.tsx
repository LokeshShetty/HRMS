import CustomCard from "../../../../components/CustomCard/CustomCard";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import * as styled from "./styles";

const TeamMembersLeave = () => {
  return (
    <CustomCard cardTitle="Team Members on Leave Today">
      <styled.MainDiv>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </styled.MainDiv>
    </CustomCard>
  );
};

export default TeamMembersLeave;
