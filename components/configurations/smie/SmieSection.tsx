import React from "react";
import Container from "@mui/material/Container";
import { Button, Stack, Divider, Grid, Typography } from "@mui/material";
import { SectionNavigation } from "../../contracts/ListContract";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import SmieForm from "./SmieForm";
import ListSmie from "./table/ListSmie";

const SmieSection = () => {
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
          <Typography variant="h4">SMIE</Typography>
        </SectionNavigation>
        <Divider />
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <SmieForm />
        </Grid>
        <Grid item xs={12} md={8}>
          <ListSmie />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SmieSection;
