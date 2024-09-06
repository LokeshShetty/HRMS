import { Button, Form, Input, Upload } from "antd";
import * as styled from "./styles";
import { useState } from "react";
import { UploadIcon } from "lucide-react";

const PayrollDocs = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

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
          <styled.Header>PAN Card Details</styled.Header>
          <styled.InputDivs>
            <styled.InputDiv>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your name on PAN Card!",
                  },
                ]}
                colon={false}
                name="pancardName"
                label="Name on PAN Card"
              >
                <Input placeholder="eg: Lokesh Shetty" />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                rules={[
                  { required: true, message: "Please input your PAN number!" },
                ]}
                colon={false}
                name="panNumber"
                label="PAN Number"
              >
                <Input type="number" placeholder="123456781234" />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                name="panCard"
                label="Upload PAN Card"
                rules={[
                  {
                    required: true,
                    message: "Please upload your PAN card!",
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
        <styled.SubDiv>
          <styled.Header>Bank Account Details</styled.Header>
          <styled.InputDivs>
            <styled.InputDiv>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input account holder's name",
                  },
                ]}
                colon={false}
                name="accountName"
                label="Account Holder's Name"
              >
                <Input placeholder="eg: Lokesh Shetty" />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                name="accountNumber"
                label="Account Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your account number!",
                  },
                ]}
              >
                <Input placeholder="eg: 123AGBH90LO" />
              </Form.Item>
            </styled.InputDiv>
            <styled.InputDiv>
              <Form.Item
                name="cancelledCheck"
                label="Upload Cancelled Cheque"
                rules={[
                  {
                    required: true,
                    message: "Please upload your Cancelled Cheque!",
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
            <styled.InputDiv>
              <Form.Item
                name="ifscCode"
                label="IFSC Code"
                rules={[
                  {
                    required: true,
                    message: "Please input your IFSC Code!",
                  },
                ]}
              >
                <Input placeholder="eg: 12000SBI1234" />
              </Form.Item>
            </styled.InputDiv>
          </styled.InputDivs>
        </styled.SubDiv>
        <styled.SubDiv>
          <styled.Header>PF Form</styled.Header>
          <styled.InputDivs>
            <styled.InputDiv>
              <Form.Item
                name="adharCard"
                label="Upload PF Form"
                rules={[
                  {
                    required: true,
                    message: "Please upload your PF Form!",
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

export default PayrollDocs;
