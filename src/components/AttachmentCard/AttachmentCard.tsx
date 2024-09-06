import { ArrowDownToLine, Paperclip } from "lucide-react";
import * as styled from "./styles";

type Props = {
  fileName: string;
};

function AttachmentCard(props: Props) {
  return (
    <styled.MainDiv>
      <styled.SubDiv>
        <Paperclip width={16} />
        <styled.AttachmentName>{props?.fileName}</styled.AttachmentName>
      </styled.SubDiv>
      <ArrowDownToLine
        width={16}
        color="#3D3D3D"
        style={{ cursor: "pointer" }}
      />
    </styled.MainDiv>
  );
}

export default AttachmentCard;
