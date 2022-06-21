import React from "react";
import Container from "@mui/material/Container";
import { Button, Stack, Grid, Divider, Typography } from "@mui/material";
import { SectionNavigation } from "../../contracts/ListContract";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import LevelForm from "./LevelForm";
import LevelList from "./table/LevelList";

const LevelSection = () => {
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
          <Typography variant="h4">Echellons</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <LevelForm />
        </Grid>
        <Grid item xs={12} md={8}>
          <LevelList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LevelSection;
