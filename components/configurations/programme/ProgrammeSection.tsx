import React from "react";
import Container from "@mui/material/Container";
import { Button, Grid, Stack, Divider, Typography } from "@mui/material";
import { SectionNavigation } from "../../contracts/ListContract";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import ProgrammeForm from "./ProgrammeForm";
import ProgrammeList from "./table/ProgrammeList";

const ProgrammeSection = () => {
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
          <Typography variant="h4">Programme</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <ProgrammeForm />
        </Grid>
        <Grid item xs={12} md={8}>
          <ProgrammeList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProgrammeSection;
