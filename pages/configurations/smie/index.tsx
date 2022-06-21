import React from "react";
import BackOfficeLayout from "../../../layouts/backOffice";
import SmieSection from "../../../components/configurations/smie/SmieSection";
import Container from "@mui/material/Container";

const Smie = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <SmieSection />
      </Container>
    </BackOfficeLayout>
  );
};

export default Smie;
