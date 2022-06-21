import React from "react";
import Container from "@mui/material/Container";
import BackOfficeLayout from "../../../layouts/backOffice";
import Details from "../../../components/employe/Details";

const DetailsEmploye = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <Details />
      </Container>
    </BackOfficeLayout>
  );
};

export default DetailsEmploye;
