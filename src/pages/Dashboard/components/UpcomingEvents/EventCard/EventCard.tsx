import * as styled from "./styles";
import Tags from "../../../../../components/Tags/Tags";

const EventCard = () => {
  return (
    <styled.MainDiv>
      <styled.LeftDiv>
        <styled.Date>31</styled.Date>
        <styled.Day>Wed</styled.Day>
      </styled.LeftDiv>
      <styled.RightDiv>
        <styled.EventName>Company Anniversary Celebration</styled.EventName>
        <styled.Venue>Conference Room A</styled.Venue>
        <styled.Timings>10:00</styled.Timings>
        <styled.Tags>
          <Tags type={1} />
        </styled.Tags>
      </styled.RightDiv>
    </styled.MainDiv>
  );
};

export default EventCard;
