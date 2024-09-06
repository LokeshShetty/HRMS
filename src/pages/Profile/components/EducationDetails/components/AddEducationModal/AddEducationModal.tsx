import { Modal, type FormInstance } from "antd";
import { useState } from "react";
import AddEducationForm from "../AddEducationForm/AddEducationForm";

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

const AddEducationModal: React.FC<CollectionCreateFormModalProps> = ({
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
      title="Add Education"
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
      <AddEducationForm
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

export default AddEducationModal;
