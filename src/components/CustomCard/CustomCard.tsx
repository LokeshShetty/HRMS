import { ReactElement } from "react";
import * as styled from "./styles";

type Props = {
  cardTitle: string;
  children: ReactElement;
};

const CustomCard = (props: Props) => {
  return (
    <styled.MainDiv>
      <styled.CardTitle>{props.cardTitle}</styled.CardTitle>
      {props.children}
    </styled.MainDiv>
  );
};

export default CustomCard;
