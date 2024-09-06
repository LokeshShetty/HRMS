import styled from "styled-components";

type props = {
  $status: string;
};

export const StatusTag = styled.div<props>`
  border-radius: 100px;
  background: ${(props) =>
    props.$status === "Approved"
      ? "linear-gradient(96deg, #5BB753 0%, #B7DF47 100%)"
      : props.$status === "Pending"
        ? "linear-gradient(97deg, #FF9D2A 0%, #FFD02A 100%)"
        : "linear-gradient(97deg, #FA6E65 0%, #FFA06A 100%)"};
  display: inline-flex;
  height: 23px;
  padding: 8px;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  color: var(--UI-UI0, #fefefe);
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 160% */
  letter-spacing: -0.05px;
`;

export const ActionDiv = styled.div<props>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) =>
    props?.$status === "Pending" ? "var(--primary-color)" : "#C3C3C3"};
  cursor: ${(props) => (props?.$status === "Pending" ? "pointer" : "default")};
`;
