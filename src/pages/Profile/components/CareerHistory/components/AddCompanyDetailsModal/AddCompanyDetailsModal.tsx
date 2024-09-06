import { Modal, type FormInstance } from "antd";
import { useState } from "react";
import AddCompanyDetailsForm from "../AddCompanyDetailsForm/AddCompanyDetailsForm";

interface Values {
  title?: string;
  description?: string;
  modifier?: string;
}

interface CollectionCreateFormModalProps {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
  initialValues: Values;
}

const AddCompanyDetailsModal: React.FC<CollectionCreateFormModalProps> = ({
  open,
  onCreate,
  onCancel,
  initialValues,
}) => {
  const [formInstance, setFormInstance] = useState<FormInstance>();
  return (
    <Modal
      centered
      open={open}
      title="Add Employment"
      okText="Save"
      cancelText="Cancel"
      okButtonProps={{ autoFocus: true }}
      onCancel={onCancel}
      destroyOnClose
      onOk={async () => {
        try {
          const values = await formInstance?.validateFields();
          formInstance?.resetFields();
          onCreate(values);
        } catch (error) {
          console.log("Failed:", error);
        }
      }}
      width={"40%"}
      footer={false}
    >
      <AddCompanyDetailsForm
        initialValues={initialValues}
        onFormInstanceReady={(instance) => {
          setFormInstance(instance);
        }}
        onCancel={onCancel}
        onOk={async () => {
          try {
            const values = await formInstance?.validateFields();
            formInstance?.resetFields();
            onCreate(values);
          } catch (error) {
            console.log("Failed:", error);
          }
        }}
      />
    </Modal>
  );
};

export default AddCompanyDetailsModal;
