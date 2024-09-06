import { useState } from "react";
import EducationCard from "../EducationDetails/components/EducationCard/EducationCard";
import * as styled from "./styles";
import { Plus } from "lucide-react";
import AddCompanyDetailsModal from "./components/AddCompanyDetailsModal/AddCompanyDetailsModal";

interface Values {
  title?: string;
  description?: string;
  modifier?: string;
}

const CareerHistory = () => {
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
        Add Employment
      </styled.AddEducationButton>
      <EducationCard handleEdit={handleEditEducationModal} />
      <AddCompanyDetailsModal
        open={openAddEducationModal}
        onCreate={onCreate}
        onCancel={() => setOpenAddEducationModal(false)}
        initialValues={{ modifier: "public" }}
      />
    </styled.MainDiv>
  );
};

export default CareerHistory;
