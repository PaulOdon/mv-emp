import React from "react";
import { Container } from "@mui/material";
import BackOfficeLayout from "../../../../layouts/backOffice";
import BadgeEmploye from "../../../../components/employe/id/badge/BadgeEmploye";

const Badge = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <BadgeEmploye />
      </Container>
    </BackOfficeLayout>
  );
};

export default Badge;
