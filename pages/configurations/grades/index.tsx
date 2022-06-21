import { Container } from "@mui/material";
import React from "react";
import GradesSection from "../../../components/configurations/grades/GradesSection";
import BackOfficeLayout from "../../../layouts/backOffice";

const Grades = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <GradesSection />
      </Container>
    </BackOfficeLayout>
  );
};

export default Grades;
