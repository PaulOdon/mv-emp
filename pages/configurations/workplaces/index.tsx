import { Container } from "@mui/material";
import React from "react";
import WorkspaceSection from "../../../components/configurations/workspaces/WorkspaceSection";
import BackOfficeLayout from "../../../layouts/backOffice";

const Workplaces = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <WorkspaceSection />
      </Container>
    </BackOfficeLayout>
  );
};

export default Workplaces;
