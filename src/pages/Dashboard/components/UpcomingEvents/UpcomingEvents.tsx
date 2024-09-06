import { Collapse, Empty } from "antd";
import CustomCard from "../../../../components/CustomCard/CustomCard";
import type { CollapseProps } from "antd";
import EventCard from "./EventCard/EventCard";

const UpcomingEvents = () => {
  // const dummyEventData = [
  //   {
  //     eventName: "Team Building Workshop",
  //     eventDate: new Date("2024-04-05"),
  //     eventType: "hrActivity",
  //     venue: "Auditorium",
  //     startTime: "09:00",
  //     endTime: "12:00",
  //   },
  //   {
  //     eventName: "Company Anniversary Celebration",
  //     eventDate: new Date("2024-04-12"),
  //     eventType: "companyEvent",
  //     venue: "Conference Room A",
  //   },
  //   {
  //     eventName: "John's Birthday",
  //     eventDate: new Date("2024-04-18"),
  //     eventType: "birthday",
  //     venue: "Meeting Room 1",
  //   },
  //   {
  //     eventName: "Public Holiday (Easter Monday)",
  //     eventDate: new Date("2024-04-22"),
  //     eventType: "publicHoliday",
  //   },
  //   {
  //     eventName: "Sales Training",
  //     eventDate: new Date("2024-04-25"),
  //     eventType: "hrActivity",
  //     venue: "Conference Room B",
  //     startTime: "10:00",
  //     endTime: "13:00",
  //   },
  //   {
  //     eventName: "Project Kickoff Meeting",
  //     eventDate: new Date("2024-04-28"),
  //     eventType: "companyEvent",
  //     venue: "Auditorium",
  //     startTime: "14:00",
  //     endTime: "16:00",
  //   },
  // ];

  // Define event data
  const eventData = [
    {
      month: "January",
      title: "New Year Celebration",
      description: "Celebrating the start of a new year.",
    },
    {
      month: "March",
      title: "Spring Festival",
      description: "Welcome the spring with open arms.",
    },
    // Add more events as needed
  ];

  // Transform event data into Collapse items
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getEventsForMonth = (month: string) => {
    // Filter events for the given month
    return eventData
      .filter((event) => event.month === month)
      .map((event, index) => <EventCard key={index} />);
  };

  const items: CollapseProps["items"] = months.map((month, index) => {
    const eventsForMonth = getEventsForMonth(month);
    return {
      key: `${index}`,
      label: month,
      children:
        eventsForMonth.length > 0 ? (
          eventsForMonth
        ) : (
          <Empty description="No events this month." />
        ),
    };
  });

  return (
    <CustomCard cardTitle="Upcoming Events">
      <Collapse
        items={items}
        bordered={false}
        defaultActiveKey={["1"]}
        expandIconPosition="end"
        ghost={true}
      />
    </CustomCard>
  );
};

export default UpcomingEvents;
