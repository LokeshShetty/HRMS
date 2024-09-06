import { Table, Tooltip } from "antd";
import type { TableColumnsType } from "antd";
import CustomCard from "../../../../components/CustomCard/CustomCard";
import dayjs from "dayjs";
import * as styled from "./styles";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import EditLeaveApplicationModal from "./components/EditLeaveApplicationModal/EditLeaveApplicationModal";
import DeleteLeaveApplication from "./components/DeleteLeaveApplicationModal/DeleteLeaveApplicationModal";

interface DataType {
  index: number;
  key: React.Key;
  startOfLeave: string;
  endOfLeave: string;
  leaves: number;
  leaveType: string;
  leaveNote: string;
  status: string;
  paid: string;
}

const originData: DataType[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    index: i + 1,
    key: i.toString(),
    startOfLeave: dayjs().format("DD/MM/YYYY"),
    endOfLeave: dayjs().format("DD/MM/YYYY"),
    leaves: i,
    leaveType: "Sick Leave",
    leaveNote:
      "kjcnwj wdncnwnciw cwdncdwcn njiwnckjwnc jnwkcjnwkcj nkjewcnjwnckjwn jnwedncjkwdnc jknwkcjnwkjc jnwjcnkjwnckjdwncwcwowck",
    status: i % 2 === 0 ? "Approved" : "Pending",
    paid: "Paid",
  });
}

const LeaveRecords = () => {
  const [openEditLeaveApplicationModal, setOpenEditLeaveApplicationModal] =
    useState(false);
  const [openDeleteLeaveApplicationModal, setOpenDeleteLeaveApplicationModal] =
    useState(false);

  const handleEditLeaveApplication = () => {
    setOpenEditLeaveApplicationModal(true);
  };

  const handleDeleteLeaveApplication = () => {
    setOpenDeleteLeaveApplicationModal(true);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      width: "7%",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <styled.ActionDiv $status={record?.status}>
          <Tooltip
            color="#525252"
            placement="bottom"
            title={
              record?.status === "Pending"
                ? "Edit this leave record"
                : `You can not edit this leave record as it's ${record?.status?.toLowerCase()}.`
            }
          >
            <Pencil
              width={16}
              onClick={() =>
                record?.status === "Pending" && handleEditLeaveApplication()
              }
            />
          </Tooltip>
          <Tooltip
            color="#525252"
            placement="bottom"
            title={
              record?.status === "Pending"
                ? "Delete this leave record"
                : `You can not delete this leave record as it's ${record?.status?.toLowerCase()}.`
            }
          >
            <Trash
              width={16}
              onClick={() =>
                record?.status === "Pending" && handleDeleteLeaveApplication()
              }
            />
          </Tooltip>
        </styled.ActionDiv>
      ),
    },
    {
      title: "Start of Leave",
      dataIndex: "startOfLeave",
      key: "startOfLeave",
    },
    {
      title: "End of Leave",
      dataIndex: "endOfLeave",
      key: "endOfLeave",
    },
    {
      title: "No. of Days",
      dataIndex: "leaves",
      key: "leaves",
    },
    {
      title: "Leave Type",
      dataIndex: "leaveType",
      key: "leaveType",
      filters: [
        { text: "Sick Leave", value: "Sick Leave" },
        { text: "Personal Leave", value: "Personal Leave" },
        {
          text: "Maternity/Paternity Leave",
          value: "Maternity/Paternity Leave",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value: string, record) => record.leaveType.startsWith(value),
    },
    {
      title: "Leave Note",
      dataIndex: "leaveNote",
      key: "leaveNote",
      width: "20%",
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Approved", value: "Approved" },
        { text: "Pending", value: "Pending" },
        {
          text: "Rejected",
          value: "Rejected",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value: string, record) => record.status.startsWith(value),
      render: (status: string) => (
        <styled.StatusTag $status={status}>{status}</styled.StatusTag>
      ),
    },
    {
      title: "Paid/Unpaid",
      dataIndex: "paid",
      key: "paid",
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  const onEdit = () => {
    setOpenEditLeaveApplicationModal(false);
  };

  const onDelete = () => {
    setOpenDeleteLeaveApplicationModal(false);
  };

  return (
    <CustomCard cardTitle="My Leave Records">
      <>
        <Table
          scroll={{ y: 400 }}
          rowSelection={{
            ...rowSelection,
          }}
          pagination={{ position: ["bottomCenter"], showSizeChanger: true }}
          dataSource={originData}
          columns={columns}
          loading={false}
        />

        <EditLeaveApplicationModal
          open={openEditLeaveApplicationModal}
          onCreate={onEdit}
          onCancel={() => setOpenEditLeaveApplicationModal(false)}
          initialValues={{ modifier: "public" }}
        />

        <DeleteLeaveApplication
          open={openDeleteLeaveApplicationModal}
          onCreate={onDelete}
          onCancel={() => setOpenDeleteLeaveApplicationModal(false)}
          initialValues={{ modifier: "public" }}
        />
      </>
    </CustomCard>
  );
};

export default LeaveRecords;
