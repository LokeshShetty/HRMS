import {
  Form,
  Input,
  type FormInstance,
  Select,
  Button,
  Upload,
  DatePicker,
} from "antd";
import * as styled from "./styles";
import { UploadIcon } from "lucide-react";
import { useEffect, useState } from "react";
import CustomButton from "../../../../../../components/CustomButton/CustomButton";

interface Values {
  title?: string;
  description?: string;
  modifier?: string;
}

interface CollectionCreateFormProps {
  initialValues: Values;
  onFormInstanceReady: (instance: FormInstance<Values>) => void;
  onOk: () => void;
  onCancel: () => void;
}

const AddCompanyDetailsForm: React.FC<CollectionCreateFormProps> = ({
  initialValues,
  onFormInstanceReady,
  onCancel,
  onOk,
}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    onFormInstanceReady(form);
  }, []);

  const EmploymentType = [
    { value: "internship", label: "Internship" },
    { value: "part-time", label: "Part-time" },
    { value: "full-time", label: "Full-time" },
  ];

  const [offerLetter, setOfferLetter] = useState<File | null>(null);

  const handleOfferLetter = (file: File) => {
    setOfferLetter(file);
  };

  const [experienceLetter, setExperienceLetter] = useState<File | null>(null);

  const handleExperienceLetter = (file: File) => {
    setExperienceLetter(file);
  };

  const [payslips, setPaySlips] = useState<File | null>(null);

  const handlePaySlips = (file: File) => {
    setPaySlips(file);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="form_in_modal"
      initialValues={initialValues}
    >
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please input your job title!",
          },
        ]}
        colon={false}
        name="jobTitle"
        label="Job Title"
      >
        <Input placeholder="eg: Frontend Developer" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please input your company/organisation!",
          },
        ]}
        colon={false}
        name="company/organisation"
        label="Company/Organisation"
      >
        <Input placeholder="eg: Google, WE-Matter" />
      </Form.Item>
      <Form.Item
        name="employmentType"
        label="Employment Type"
        rules={[
          { required: true, message: "Please select your employment type!" },
        ]}
      >
        <Select
          placeholder="select qualification"
          options={EmploymentType}
          showSearch
        />
      </Form.Item>
      <Form.Item
        name="startDate"
        label="Start Date"
        rules={[{ required: true, message: "Please input your start date!" }]}
      >
        <DatePicker
          placeholder="DD/MM/YYYY"
          format={"DD/MM/YYYY"}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item
        name="endDate"
        label="End Date"
        rules={[{ required: true, message: "Please input your end date!" }]}
      >
        <DatePicker
          placeholder="DD/MM/YYYY"
          format={"DD/MM/YYYY"}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please input your major/specialisation!",
          },
        ]}
        colon={false}
        name="reason"
        label="Reason For Leaving"
      >
        <Input placeholder="eg: Mechanical Engineering" />
      </Form.Item>
      <Form.Item
        name="offerLetter"
        label="Upload Offer Letter"
        rules={[
          {
            required: true,
            message: "Please upload your offer letter!",
          },
        ]}
        style={{ width: "40%" }}
      >
        <Upload
          listType="picture"
          onChange={({ file }) => handleOfferLetter(file)}
        >
          <Button
            style={{ display: "flex", alignItems: "center" }}
            icon={<UploadIcon width={18} />}
          >
            Click to Upload
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="experienceLetter"
        label="Upload Experience Letter"
        rules={[
          {
            required: true,
            message: "Please upload your experience letter!",
          },
        ]}
        style={{ width: "40%" }}
      >
        <Upload
          listType="picture"
          onChange={({ file }) => handleExperienceLetter(file)}
        >
          <Button
            style={{ display: "flex", alignItems: "center" }}
            icon={<UploadIcon width={18} />}
          >
            Click to Upload
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="payslips"
        label="Upload Payslips (Past 3 Months)"
        rules={[
          {
            required: true,
            message: "Please upload your payslips!",
          },
        ]}
        style={{ width: "40%" }}
      >
        <Upload
          maxCount={3}
          listType="picture"
          onChange={({ file }) => handlePaySlips(file)}
        >
          <Button
            style={{ display: "flex", alignItems: "center" }}
            icon={<UploadIcon width={18} />}
          >
            Click to Upload
          </Button>
        </Upload>
      </Form.Item>
      <styled.ModalFooter>
        <CustomButton
          onClick={() => {
            onOk();
            console.log("clicked");
          }}
          buttonTitle="Save"
          type={1}
        />
        <CustomButton
          onClick={() => onCancel()}
          buttonTitle="Cancel"
          type={2}
        />
      </styled.ModalFooter>
    </Form>
  );
};

export default AddCompanyDetailsForm;
