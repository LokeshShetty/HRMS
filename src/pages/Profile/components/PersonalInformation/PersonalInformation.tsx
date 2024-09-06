import { Button, Form, Input, Select, DatePicker, Upload } from "antd";
import * as styled from "./styles";
import { useState } from "react";
import { UploadIcon } from "lucide-react";

const PersonalInformation = () => {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "others", label: "Others" },
  ];

  const { Option } = Select;

  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleUpload = (file: File) => {
    setSelectedFile(file);
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
                  { required: true, message: "Please input your firstname!" },
                ]}
                colon={false}
                name="firstname"
                label="First Name"
              >
                <Input placeholder="First Name" />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                rules={[
                  { required: true, message: "Please input your lastname!" },
                ]}
                colon={false}
                name="lastname"
                label="Last Name"
              >
                <Input placeholder="Last Name" />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                rules={[
                  { required: true, message: "Please input your employee Id!" },
                ]}
                colon={false}
                name="employeeId"
                label="Employee Id"
              >
                <Input placeholder="eg: Emp01" />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true, message: "Please select gender!" }]}
              >
                <Select
                  placeholder="select gender"
                  options={genderOptions}
                  showSearch
                />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your date of birth!",
                  },
                ]}
                colon={false}
                name="dateOfBirth"
                label="Date Of Birth"
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
                  {
                    required: true,
                    message: "Please input your nationality!",
                  },
                ]}
                colon={false}
                name="nationality"
                label="Nationality"
              >
                <Input placeholder="Indian" />
              </Form.Item>
            </styled.InputDiv>
          </styled.InputDivs>
        </styled.SubDiv>
        <styled.SubDiv>
          <styled.Header>Contact Details</styled.Header>
          <styled.InputDivs>
            <styled.InputDiv>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                  {
                    max: 10,
                    message: "Phone number cannot be more than 10 number",
                  },
                ]}
              >
                <Input
                  type="number"
                  addonBefore={prefixSelector}
                  style={{ width: "100%" }}
                  maxLength={10}
                />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                  {
                    max: 10,
                    message: "Phone number cannot be more than 10 number",
                  },
                ]}
                name="alternatePhone"
                label="Alternate Phone"
              >
                <Input
                  maxLength={10}
                  addonBefore={prefixSelector}
                  style={{ width: "100%" }}
                  type="number"
                />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                name="email"
                label="Work Email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input placeholder="eg: abcdef@xyz.com" />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                name="personalEmail"
                label="Personal Email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input placeholder="eg: abcdef@xyz.com" />
              </Form.Item>
            </styled.InputDiv>
          </styled.InputDivs>
        </styled.SubDiv>
        <styled.SubDiv>
          <styled.Header>Documents</styled.Header>
          <styled.InputDivs>
            <styled.InputDiv>
              <Form.Item
                name="adharCard"
                label="Upload Aadhar Card"
                rules={[
                  {
                    required: true,
                    message: "Please upload your Aadhar card!",
                  },
                ]}
              >
                <Upload
                  listType="picture"
                  onChange={({ file }) => handleUpload(file)}
                >
                  <Button
                    style={{ display: "flex", alignItems: "center" }}
                    icon={<UploadIcon width={18} />}
                  >
                    Click to Upload
                  </Button>
                </Upload>
              </Form.Item>
            </styled.InputDiv>
          </styled.InputDivs>
        </styled.SubDiv>
      </styled.MainDiv>
    </Form>
  );
};

export default PersonalInformation;
