import { Col, DatePicker, Form, Row, Select } from "antd";
import CustomCard from "../../../../components/CustomCard/CustomCard";
import TextArea from "antd/es/input/TextArea";
import CustomButton from "../../../../components/CustomButton/CustomButton";

const LeaveApplication = () => {
  const leaveTypeOptions = [
    { value: "sickLeave", label: "Sick Leave" },
    { value: "personalLeave", label: "Personal Leave" },
    { value: "maternityLeave", label: "Maternity/Paternity Leave" },
  ];

  return (
    <CustomCard cardTitle="Leave Application">
      <Form layout="vertical">
        <Row gutter={23}>
          <Col span={12}>
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
          </Col>
          <Col span={12}>
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
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="leaveType"
              label="Leave Type"
              rules={[{ required: true, message: "Please select leave type!" }]}
            >
              <Select
                placeholder="select leave type"
                options={leaveTypeOptions}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item name="leaveNote" label="Leave Note">
              <TextArea
                placeholder="Enter Leave Note"
                maxLength={200}
                showCount
                rows={4}
                allowClear
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col>
            <CustomButton buttonTitle="Submit Leave Application" type={1} />
          </Col>
        </Row>
      </Form>
    </CustomCard>
  );
};

export default LeaveApplication;
