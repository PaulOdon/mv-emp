import React from "react";
import BackOfficeLayout from "../../layouts/backOffice";
import ListContract from "../../components/contracts/ListContract";
import { Container } from "@mui/material";

const Contracts = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <ListContract />
      </Container>
    </BackOfficeLayout>
  );
};

export default Contracts;
