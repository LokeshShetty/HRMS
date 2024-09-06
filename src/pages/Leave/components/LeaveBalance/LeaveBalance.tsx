import CustomCard from "../../../../components/CustomCard/CustomCard";
import * as styled from "./styles";
import LeaveBalanceCard from "./components/LeaveBalanceCard/LeaveBalanceCard";

const LeaveBalance = () => {
  const leaves = [
    {
      leaveType: "Sick Leave",
      leaves: 3,
    },
    {
      leaveType: "Personal Leave",
      leaves: 10,
    },
    {
      leaveType: "Maternity/Paternity Leave",
      leaves: 15,
    },
  ];
  return (
    <CustomCard cardTitle="Leave Balance">
      <styled.MainDiv>
        {leaves?.map((item, index) => (
          <div key={index}>
            <LeaveBalanceCard
              leaveType={item?.leaveType}
              leaves={item?.leaves}
            />
          </div>
        ))}
      </styled.MainDiv>
    </CustomCard>
  );
};

export default LeaveBalance;
