import Attendance from "./components/Attendance/Attendance";
import AttendanceRecord from "./components/AttendanceRecord/AttendanceRecord";
import TeamMembersLeave from "./components/TeamMembersLeave/TeamMembersLeave";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import * as styled from "./styles";

const Dashboard = () => {
  return (
    <styled.MainDiv>
      <styled.LeftDiv>
        <Attendance />
        <AttendanceRecord />
        <TeamMembersLeave />
      </styled.LeftDiv>
      <styled.RightDiv>
        <UpcomingEvents />
      </styled.RightDiv>
    </styled.MainDiv>
  );
};

export default Dashboard;
