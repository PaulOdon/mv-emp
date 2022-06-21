import React from "react";
import BackOfficeLayout from "../../../layouts/backOffice";
import FonctionSection from "../../../components/configurations/fonction/FonctionSection";
import { Container } from "@mui/material";

const Fonctions = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <FonctionSection />
      </Container>
    </BackOfficeLayout>
  );
};

export default Fonctions;
