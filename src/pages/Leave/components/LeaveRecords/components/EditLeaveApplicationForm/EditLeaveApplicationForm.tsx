import { Form, Input, type FormInstance, Select, DatePicker } from "antd";
import * as styled from "./styles";
import { useEffect } from "react";
import CustomButton from "../../../../../../components/CustomButton/CustomButton";
import TextArea from "antd/es/input/TextArea";

interface Values {
  title?: string;
  description?: string;
  modifier?: string;
}

interface EditLeaveProps {
  initialValues: Values;
  onFormInstanceReady: (instance: FormInstance<Values>) => void;
  onOk: () => void;
  onCancel: () => void;
}

const EditLeaveApplicationForm: React.FC<EditLeaveProps> = ({
  initialValues,
  onFormInstanceReady,
  onCancel,
  onOk,
}) => {
  const [form] = Form.useForm();
  useEffect(() => {
    onFormInstanceReady(form);
  }, []);

  const leaveTypeOptions = [
    { value: "sickLeave", label: "Sick Leave" },
    { value: "personalLeave", label: "Personal Leave" },
    { value: "maternityLeave", label: "Maternity/Paternity Leave" },
  ];

  return (
    <Form
      layout="vertical"
      form={form}
      name="form_in_modal"
      initialValues={initialValues}
    >
      <Form.Item
        name="startDate"
        label="Start of Leave"
        rules={[
          {
            required: true,
            message: "Start date of leave is required",
          },
        ]}
      >
        <DatePicker
          placeholder="DD/MM/YYYY"
          format={"DD/MM/YYYY"}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item
        name="endDate"
        label="End of Leave"
        rules={[
          {
            required: true,
            message: "End date of leave is required",
          },
        ]}
      >
        <DatePicker
          placeholder="DD/MM/YYYY"
          format={"DD/MM/YYYY"}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item
        name="leaveType"
        label="Leave Type"
        rules={[{ required: true, message: "Please select leave type!" }]}
      >
        <Select placeholder="select leave type" options={leaveTypeOptions} />
      </Form.Item>
      <Form.Item name="leaveNote" label="Leave Note">
        <TextArea
          placeholder="Enter Leave Note"
          maxLength={200}
          showCount
          rows={4}
          allowClear
        />
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

export default EditLeaveApplicationForm;
