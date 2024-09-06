import CustomCard from "../../../../components/CustomCard/CustomCard";
import { DatePicker, TimePicker } from "antd";
import { images } from "../../../../constants";
import * as styled from "./styles";
import dayjs from "dayjs";
import CustomSwitch from "./components/CustomSwitch.tsx/CustomSwitch";
import CustomButton from "../../../../components/CustomButton/CustomButton";
const Attendance = () => {
  const timeFormat = "h:mm a";
  const dateFormat = "dddd, MMM DD YYYY";
  return (
    <CustomCard cardTitle="Attendance">
      <styled.MainDiv>
        <styled.LeftDiv>
          <styled.InputWrapper>
            <styled.InputContainer>
              <styled.Label>Date</styled.Label>
              <DatePicker format={dateFormat} defaultValue={dayjs()} />
            </styled.InputContainer>
            <styled.InputContainer>
              <styled.Label>Time</styled.Label>
              <TimePicker format={timeFormat} defaultValue={dayjs()} />
            </styled.InputContainer>
          </styled.InputWrapper>
          <styled.SwitchWrapper>
            <CustomSwitch />
            <CustomButton type={1} buttonTitle="Clock In" />
          </styled.SwitchWrapper>
        </styled.LeftDiv>
        <styled.RightDiv>
          <img src={images?.attendanceIllustrate} alt="attendance-illustrate" />
        </styled.RightDiv>
      </styled.MainDiv>
    </CustomCard>
  );
};

export default Attendance;
