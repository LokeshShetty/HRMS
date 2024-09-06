import { useState } from "react";
import EducationCard from "./components/EducationCard/EducationCard";
import * as styled from "./styles";
import { Plus } from "lucide-react";
import AddEducationModal from "./components/AddEducationModal/AddEducationModal";

interface Values {
  title?: string;
  description?: string;
  modifier?: string;
}

const EducationDetails = () => {
  const [formValues, setFormValues] = useState<Values>();
  const [openAddEducationModal, setOpenAddEducationModal] = useState(false);
  const onCreate = (values: Values) => {
    console.log("Received values of form: ", values);
    setFormValues(values);
    setOpenAddEducationModal(false);
  };

  const handleEditEducationModal = () => {
    setOpenAddEducationModal(true);
  };

  return (
    <styled.MainDiv>
      <styled.AddEducationButton onClick={() => setOpenAddEducationModal(true)}>
        <Plus width={18} />
        Add Education
      </styled.AddEducationButton>
      <EducationCard handleEdit={handleEditEducationModal} />
      <AddEducationModal
        open={openAddEducationModal}
        onCreate={onCreate}
        onCancel={() => setOpenAddEducationModal(false)}
        initialValues={{ modifier: "public" }}
      />
    </styled.MainDiv>
  );
};

export default EducationDetails;
