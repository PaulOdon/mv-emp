import { Container } from "@mui/material";
import React from "react";
import BackOfficeLayout from "../../../layouts/backOffice";
import ContractTypeSection from "../../../components/configurations/contract-type/ContractTypeSection";

const ContracType = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <ContractTypeSection />
      </Container>
    </BackOfficeLayout>
  );
};

export default ContracType;
