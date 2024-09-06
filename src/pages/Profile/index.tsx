import CustomButton from "../../components/CustomButton/CustomButton";
import AttendanceRecords from "./components/AttendanceRecords/AttendanceRecords";
import CareerHistory from "./components/CareerHistory/CareerHistory";
import EducationDetails from "./components/EducationDetails/EducationDetails";
import JobProfile from "./components/JobProfile/JobProfile";
import PayrollDocs from "./components/PayrollDocs/PayrollDocs";
import PersonalInformation from "./components/PersonalInformation/PersonalInformation";
import * as styled from "./styles";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

const Profile = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Personal Information",
      children: <PersonalInformation />,
    },
    {
      key: "2",
      label: "Job Profile",
      children: <JobProfile />,
    },
    {
      key: "3",
      label: "Academic History",
      children: <EducationDetails />,
    },
    {
      key: "4",
      label: "Career History",
      children: <CareerHistory />,
    },
    {
      key: "5",
      label: "Payroll Documents",
      children: <PayrollDocs />,
    },
    {
      key: "6",
      label: "Attendance Records",
      children: <AttendanceRecords />,
    },
  ];
  return (
    <styled.MainDiv>
      <styled.Header>
        <styled.Left>
          <styled.Avatar>L</styled.Avatar>
          <styled.ProfileDiv>
            <styled.NameDiv>Lokesh Shetty</styled.NameDiv>
            <styled.RoleDiv>Frontend Web Developer</styled.RoleDiv>
          </styled.ProfileDiv>
        </styled.Left>
        <styled.Right>
          <CustomButton type={1} buttonTitle="Update Changes" />
          <CustomButton type={2} buttonTitle="Discard Changes" />
        </styled.Right>
      </styled.Header>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </styled.MainDiv>
  );
};

export default Profile;
