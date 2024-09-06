import * as styled from "./styles";

type Props = {
  buttonTitle: string;
  type: 1 | 2; //1 is primary and 2 is secondary
  onClick?: () => void;
};

const CustomButton = (props: Props) => {
  return (
    <styled.MainDiv onClick={props.onClick} type={props.type}>
      <styled.ButtonTitle type={props.type}>
        {props.buttonTitle}
      </styled.ButtonTitle>
    </styled.MainDiv>
  );
};

export default CustomButton;
