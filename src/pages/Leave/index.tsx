import LeaveApplication from "./components/LeaveApplication/LeaveApplication";
import LeaveBalance from "./components/LeaveBalance/LeaveBalance";
import LeaveRecords from "./components/LeaveRecords/LeaveRecords";
import * as styled from "./styles";

const Dashboard = () => {
  return (
    <styled.MainDiv>
      <styled.SubDiv>
        <styled.LeftDiv>
          <LeaveApplication />
        </styled.LeftDiv>
        <styled.RightDiv>
          <LeaveBalance />
        </styled.RightDiv>
      </styled.SubDiv>
      <styled.SubDiv>
        <LeaveRecords />
      </styled.SubDiv>
    </styled.MainDiv>
  );
};

export default Dashboard;
