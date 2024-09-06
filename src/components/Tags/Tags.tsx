import * as styled from "./styles";

type Props = {
  type: number;
};

const Tags = (props: Props) => {
  return (
    <styled.MainDiv type={props?.type}>
      {props?.type === 1
        ? "Birthday"
        : props?.type === 2
          ? "Public Holiday"
          : props?.type === 3
            ? "Company Event"
            : props?.type === 4
              ? "Rejected"
              : props?.type === 5
                ? "Pending"
                : "Approved"}
    </styled.MainDiv>
  );
};

export default Tags;
