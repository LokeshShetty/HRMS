import * as styled from "./styles";
import CustomCard from "../../../../components/CustomCard/CustomCard";
import { Table, TableColumnsType } from "antd";
import dayjs from "dayjs";

type Props = {};

type DataType = {
  index: number;
  key: React.Key;
  endOfLeave: string;
  workMode: string;
  date: string;
  attendanceStatus: string;
  totalHrs: number;
  clockInTime: string;
  clockOutTime: string;
};

type FilterObject = {
  text: string;
  value: string;
};

const originData: DataType[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    index: i + 1,
    key: i.toString(),
    date: dayjs().format("dddd, MMM DD YYYY"),
    endOfLeave: dayjs().format("DD/MM/YYYY"),
    attendanceStatus: "Early",
    workMode: "On Site",
    totalHrs: 10,
    clockInTime: dayjs().format("DD/MM/YYYY"),
    clockOutTime: dayjs().format("DD/MM/YYYY"),
  });
}

const AttendanceRecords = (props: Props) => {
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

  const uniqueDates = Array.from(
    new Set(originData?.map((item: DataType) => item?.date))
  );

  // Define the type for the transformed objects

  // Transform the unique dates array into an array of FilterObject
  const transformedUniqueDates: FilterObject[] = uniqueDates?.map(
    (date: any) => ({
      text: date,
      value: date,
    })
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      width: "6%",
      align: "center",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      filters: transformedUniqueDates,
      filterMode: "tree",
      filterSearch: true,
      width: "25%",
      onFilter: (value: string, record) => record.date.startsWith(value),
    },
    {
      title: "Work Mode",
      dataIndex: "workMode",
      key: "workMode",
      filters: [
        { text: "On Site", value: "On Site" },
        { text: "WFH", value: "WFH" },
      ],
      filterMode: "tree",
      width: "12%",
      filterSearch: true,
      onFilter: (value: string, record) => record.workMode.startsWith(value),
    },
    {
      title: "Attendance Status",
      dataIndex: "attendanceStatus",
      key: "attendanceStatus",
      width: "15%",
      filters: [
        { text: "Early", value: "Early" },
        { text: "On Time", value: "On Time" },
        { text: "On Leave", value: "On Leave" },
        { text: "Late", value: "Late" },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value: string, record) =>
        record.attendanceStatus.startsWith(value),
    },
    {
      title: "Total Hours",
      dataIndex: "totalHrs",
      key: "totalHrs",
      width: "10%",
    },
    {
      title: "Clock In Time",
      dataIndex: "clockInTime",
      key: "leaveNote",
      ellipsis: true,
      width: "12%",
    },
    {
      title: "Clock Out Time",
      dataIndex: "clockOutTime",
      key: "clockOutTime",
      ellipsis: true,
      width: "15%",
    },
  ];
  return (
    <styled.MainDiv>
      <CustomCard cardTitle="">
        <div>attendance bar chart will come</div>
      </CustomCard>
      <CustomCard cardTitle="Lokesh's Attendance Record">
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
      </CustomCard>
    </styled.MainDiv>
  );
};

export default AttendanceRecords;
