import { Col, Modal, Row, type FormInstance } from "antd";
import { useState } from "react";
import * as styled from "./styles";
import CustomButton from "../../../../../../components/CustomButton/CustomButton";

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

const DeleteLeaveApplicationModal: React.FC<CollectionCreateFormModalProps> = ({
  open,
  onCreate,
  onCancel,
}) => {
  const [formInstance, setFormInstance] = useState<FormInstance>();
  return (
    <Modal
      centered
      open={open}
      title="Delete Leave Application"
      okText="Save"
      cancelText="Cancel"
      okButtonProps={{ autoFocus: true }}
      onCancel={onCancel}
      destroyOnClose
      onOk={async () => {
        try {
          const values = await formInstance?.validateFields();
          onCreate(values);
        } catch (error) {
          console.log("Failed:", error);
        }
      }}
      width={"40%"}
      // footer={false}
    >
      <Row justify={"center"}>
        <Col>
          <styled.Description>
            Are you sure you want to delete this leave application?
          </styled.Description>
          <styled.ModalFooter>
            <CustomButton type={1} buttonTitle="Delete Leave Application" />
            <CustomButton type={2} buttonTitle="Keep Leave Application" />
          </styled.ModalFooter>
        </Col>
      </Row>
    </Modal>
  );
};

export default DeleteLeaveApplicationModal;
