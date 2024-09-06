import styled from "styled-components";

export const MainDiv = styled.div`
  border-radius: 12px;
  background: var(--white-color);
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  padding: 14px 24px;
  align-items: center;
  gap: 20px;
  align-self: stretch;
`;

export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Date = styled.div`
  color: var(--primary-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
`;

export const FontStyles = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const EventName = styled(FontStyles)`
  color: var(--primary-color);
`;

export const Timings = styled(FontStyles)`
  color: var(--secondary-color);
`;

export const Venue = styled(Timings)``;

export const Day = styled(Timings)``;

export const Tags = styled.div`
  display: flex;
  gap: 4px;
`;
