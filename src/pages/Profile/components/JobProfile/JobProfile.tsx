import { Form, Input, Select, DatePicker } from "antd";
import * as styled from "../SharedStyles";

const JobProfile = () => {
  const workModeOptions = [
    { value: "onsite", label: "On Site" },
    { value: "hybrid", label: "Hybrid" },
    { value: "remote", label: "Remote" },
  ];

  const employStatusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      name="register"
      onFinish={onFinish}
      initialValues={{ prefix: "91" }}
      scrollToFirstError
    >
      <styled.MainDiv>
        <styled.SubDiv>
          <styled.Header>Personal Details</styled.Header>

          <styled.InputDivs>
            <styled.InputDiv>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your joining date!",
                  },
                ]}
                colon={false}
                name="joiningDate"
                label="Joining Date"
              >
                <DatePicker
                  placeholder="DD/MM/YYYY"
                  format={"DD/MM/YYYY"}
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                rules={[
                  { required: true, message: "Please input your job title!" },
                ]}
                colon={false}
                name="jobTitle"
                label="Job Title"
              >
                <Input placeholder="eg: Frontend Developer" />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                name="department"
                label="Department"
                rules={[
                  { required: true, message: "Please select department!" },
                ]}
              >
                <Select
                  placeholder="select department"
                  //   options={genderOptions}
                  showSearch
                />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your reporting manager!",
                  },
                ]}
                colon={false}
                name="reportingTo"
                label="Reporting To"
              >
                <Input placeholder="eg: Lokesh" />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                name="employmentStatus"
                label="Employment Status"
                rules={[
                  {
                    required: true,
                    message: "Please select your employment status!",
                  },
                ]}
              >
                <Select
                  placeholder="select employment status"
                  options={employStatusOptions}
                  showSearch
                />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                name="workMode"
                label="Work Mode"
                rules={[
                  {
                    required: true,
                    message: "Please select your work mode!",
                  },
                ]}
              >
                <Select
                  placeholder="select work mode"
                  options={workModeOptions}
                  showSearch
                />
              </Form.Item>
            </styled.InputDiv>

            <styled.InputDiv>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your salary!",
                  },
                ]}
                colon={false}
                name="salary"
                label="Salary"
              >
                <Input placeholder="eg: 50000" />
              </Form.Item>
            </styled.InputDiv>

            <styled.InputDiv>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your location!",
                  },
                ]}
                colon={false}
                name="location"
                label="Location"
              >
                <Input placeholder="eg: Mumbai" />
              </Form.Item>
            </styled.InputDiv>
          </styled.InputDivs>
        </styled.SubDiv>
      </styled.MainDiv>
    </Form>
  );
};

export default JobProfile;
