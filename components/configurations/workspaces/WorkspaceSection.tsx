import React from "react";
import Container from "@mui/material/Container";
import { Button, Grid, Stack, Divider, Typography } from "@mui/material";
import { SectionNavigation } from "../../contracts/ListContract";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import WorkspaceForm from "./WorkspaceForm";
import WorkspaceList from "./table/WorkspaceList";

const WorkspaceSection = () => {
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
          <Typography variant="h4">Lieux de travail</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <WorkspaceForm />
        </Grid>
        <Grid item xs={12} md={8}>
          <WorkspaceList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WorkspaceSection;
