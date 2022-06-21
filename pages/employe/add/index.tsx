import React from "react";
import Container from "@mui/material/Container";
import BackOfficeLayout from "../../../layouts/backOffice";
import AddForm from "../../../components/employe/add/AddForm";

const AddEmploye = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <AddForm />
      </Container>
    </BackOfficeLayout>
  );
};

export default AddEmploye;
