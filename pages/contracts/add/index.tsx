import React from "react";
import BackOfficeLayout from "../../../layouts/backOffice";
import AddNewContract from "../../../components/contracts/add/AddNewContract";
import { Container } from "@mui/material";

const AddNewContracts = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <AddNewContract />
      </Container>
    </BackOfficeLayout>
  );
};

export default AddNewContracts;
