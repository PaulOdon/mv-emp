import React from "react";
import Container from "@mui/material/Container";
import { Button, Grid, Divider, Stack, Typography } from "@mui/material";
import { SectionNavigation } from "../../contracts/ListContract";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import ContractTypeForm from "./ContractTypeForm";
import ContractTypeList from "./table/ContractTypeList";

const ContractTypeSection = () => {
  return (
    <Container maxWidth="xl">
      <Stack>
        <SectionNavigation
          direction="row"
          justifyContent="space-between"
          mb={1}
        >
          <Link href="/">
            <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
              Retour
            </Button>
          </Link>
          <Typography variant="h4">Type de contrat</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <ContractTypeForm />
        </Grid>
        <Grid item xs={12} md={8}>
          <ContractTypeList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContractTypeSection;
