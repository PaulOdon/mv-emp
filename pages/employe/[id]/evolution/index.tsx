import React from "react";
import { Container } from "@mui/material";
import BackOfficeLayout from "../../../../layouts/backOffice";
import Evolutions from "../../../../components/employe/id/evolution/Evolutions";

const Evolution = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <Evolutions />
      </Container>
    </BackOfficeLayout>
  );
};

export default Evolution;
