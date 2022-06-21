import { Container } from "@mui/material";
import React from "react";
import CategorieSection from "../../../components/configurations/categorie/CategorieSection";
import BackOfficeLayout from "../../../layouts/backOffice";

const Categories = () => {
  return (
    <BackOfficeLayout>
      <Container maxWidth="xl">
        <CategorieSection />
      </Container>
    </BackOfficeLayout>
  );
};

export default Categories;
