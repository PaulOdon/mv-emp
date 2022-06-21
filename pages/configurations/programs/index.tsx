import { Container } from "@mui/material";
import React from "react";
import ProgrammeSection from "../../../components/configurations/programme/ProgrammeSection";
import BackOfficeLayout from "../../../layouts/backOffice";

const Programs = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <ProgrammeSection />
      </Container>
    </BackOfficeLayout>
  );
};

export default Programs;
