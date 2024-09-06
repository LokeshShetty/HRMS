import * as styled from "./styles.ts";

type Props = {
  leaveType: string;
  leaves: number;
};

const LeaveBalanceCard = (props: Props) => {
  return (
    <styled.MainDiv>
      <styled.LeaveType>{props.leaveType}</styled.LeaveType>
      <styled.LeavesDiv>
        <styled.Leaves>{props.leaves}</styled.Leaves>
        <styled.SubDiv>Days</styled.SubDiv>
      </styled.LeavesDiv>
    </styled.MainDiv>
  );
};

export default LeaveBalanceCard;
