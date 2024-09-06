import * as styled from "./styles";
import { Pencil } from "lucide-react";
import AttachmentCard from "../../../../../../components/AttachmentCard/AttachmentCard";

type props = {
  handleEdit: () => void;
};

const EducationCard = (props: props) => {
  return (
    <styled.MainDiv>
      <styled.SubDiv>
        <styled.QualificationHeader>
          <styled.Qualification>
            Bachelor of Engineering | Information Technology
            <Pencil
              onClick={props.handleEdit}
              width={16}
              style={{ cursor: "pointer" }}
            />
          </styled.Qualification>
        </styled.QualificationHeader>
        <styled.SubDetails>
          Vidyalankar Institute of Technology
        </styled.SubDetails>
        <styled.SubDetails>Grade/Score/CGPA : 9.07</styled.SubDetails>
        <styled.SubDetails>Year of Passing : 2023</styled.SubDetails>
      </styled.SubDiv>
      <styled.SubDiv>
        <AttachmentCard fileName="lokesh" />
      </styled.SubDiv>
    </styled.MainDiv>
  );
};

export default EducationCard;
