import { Container } from "@mui/material";
import React from "react";
import LevelSection from "../../../components/configurations/level/LevelSection";
import BackOfficeLayout from "../../../layouts/backOffice";

const Levels = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <LevelSection />
      </Container>
    </BackOfficeLayout>
  );
};

export default Levels;
