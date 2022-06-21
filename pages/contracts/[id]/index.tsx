import { Container } from "@mui/material";
import React from "react";
import BackOfficeLayout from "../../../layouts/backOffice";
import DetailsContracts from "../../../components/contracts/id/DetailsContracts";

const DetailsContract = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <DetailsContracts />
      </Container>
    </BackOfficeLayout>
  );
};

export default DetailsContract;
