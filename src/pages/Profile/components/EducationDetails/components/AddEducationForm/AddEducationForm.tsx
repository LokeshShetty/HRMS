import { Form, Input, type FormInstance, Select, Button, Upload } from "antd";
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

const AddEducationForm: React.FC<CollectionCreateFormProps> = ({
  initialValues,
  onFormInstanceReady,
  onCancel,
  onOk,
}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    onFormInstanceReady(form);
  }, []);

  const qualificationOptions = [
    { value: "PhD", label: "PhD" },
    { value: "Masters", label: "Masters" },
    { value: "Bachelors", label: "Bachelors" },
    { value: "Diploma", label: "Diploma" },
    { value: "SSC", label: "SSC" },
    { value: "HSC", label: "HSC" },
  ];

  const yearOfPassingOptions = [
    { value: 2024, label: "2024" },
    { value: 2023, label: "2023" },
    { value: 2022, label: "2022" },
    { value: 2021, label: "2021" },
    { value: 2020, label: "2020" },
    { value: 2019, label: "2019" },
  ];

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleUpload = (file: File) => {
    setSelectedFile(file);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="form_in_modal"
      initialValues={initialValues}
    >
      <Form.Item
        name="qualification"
        label="Qualification"
        rules={[
          { required: true, message: "Please select your qualification!" },
        ]}
      >
        <Select
          placeholder="select qualification"
          options={qualificationOptions}
          showSearch
        />
      </Form.Item>
      <Form.Item
        name="course"
        label="Course"
        rules={[{ required: true, message: "Please select your course!" }]}
      >
        <Select
          placeholder="select course"
          // options={qualificationOptions}
          showSearch
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
        name="major/specialisation"
        label="Major/Specialisation"
      >
        <Input placeholder="eg: Mechanical Engineering" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please input your institute!",
          },
        ]}
        colon={false}
        name="institute"
        label="Institute"
      >
        <Input placeholder="eg: Lovely Professional University" />
      </Form.Item>
      <Form.Item
        name="passingYear"
        label="Year of Passing"
        rules={[
          { required: true, message: "Please select your year of passing!" },
        ]}
      >
        <Select
          placeholder="select course"
          options={yearOfPassingOptions}
          showSearch
        />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please input your Grade/Score/CGPA",
          },
        ]}
        colon={false}
        name="score"
        label="Grade/Score/CGPA"
      >
        <Input placeholder="eg: A, 98%, 9.8" />
      </Form.Item>
      <Form.Item
        name="adharCard"
        label="Upload Marksheet/Certificate"
        rules={[
          {
            required: true,
            message: "Please upload your marksheet/certificate!",
          },
        ]}
      >
        <Upload listType="picture" onChange={({ file }) => handleUpload(file)}>
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

export default AddEducationForm;
