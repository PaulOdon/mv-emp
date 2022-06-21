import { Button, Container, Grid, Stack, styled, Typography } from "@mui/material";
import React from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { SectionNavigation } from "../ListContract";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DetailsContracts = () => {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#fff", pb: 5 }}>
      <SectionNavigation direction="row" justifyContent="space-between" sx={{mb:2}}>
        <Link href="/contracts">
          <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
            Retour
          </Button>
        </Link>
        <Typography variant="h4" color="GrayText">
          Details du contrats
        </Typography>
      </SectionNavigation>
      <DetailsContainer>
        <Grid container spacing={4} my={1}>
          <Grid item xs={12} md={12}>
            <InfoItems direction="row" spacing={2}>
              <Typography variant="body1" color="secondary">
                Référence :
              </Typography>
              <Typography variant="body1" color="gray">
                CONTRAT001
              </Typography>
            </InfoItems>
          </Grid>
        </Grid>
        <Grid container spacing={4} my={1}>
          <Grid item xs={12} md={12}>
            <InfoItems direction="row" spacing={2}>
              <Typography variant="body1" color="secondary">
                Employé :
              </Typography>
              <Typography variant="body1" color="gray">
                RAKOTO Randria
              </Typography>
            </InfoItems>
          </Grid>
        </Grid>
        <Grid container spacing={4} my={1}>
          <Grid item xs={12} md={12}>
            <InfoItems direction="row" spacing={2}>
              <Typography variant="body1" color="secondary">
                Type de contrat :
              </Typography>
              <Typography variant="body1" color="gray">
                CDI
              </Typography>
            </InfoItems>
          </Grid>
        </Grid>
        <Grid container spacing={4} my={1}>
          <Grid item xs={12} md={12}>
            <InfoItems direction="row" spacing={2}>
              <Typography variant="body1" color="secondary">
                Statut :
              </Typography>
              <Typography variant="body1" color="gray">
                En cours
              </Typography>
            </InfoItems>
          </Grid>
        </Grid>
        <Grid container spacing={4} my={1}>
          <Grid item xs={12} md={12}>
            <InfoItems direction="row" spacing={2}>
              <Typography variant="body1" color="secondary">
                Salaire de base :
              </Typography>
              <Typography variant="body1" color="gray">
                1 000 000 Ariary
              </Typography>
            </InfoItems>
          </Grid>
        </Grid>
        <Grid container spacing={4} my={1}>
          <Grid item xs={12} md={6}>
            <InfoItems direction="row" spacing={2}>
              <Typography variant="body1" color="secondary">
                Date de début :
              </Typography>
              <Typography variant="body1" color="gray">
                02/01/2021
              </Typography>
            </InfoItems>
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoItems direction="row" spacing={2}>
              <Typography variant="body1" color="secondary">
                Date de fin :
              </Typography>
              <Typography variant="body1" color="gray">
                30/12/2022
              </Typography>
            </InfoItems>
          </Grid>
        </Grid>
        <Grid container spacing={4} my={1}>
          <Grid item xs={12} md={12}>
            <InfoItems direction="row" spacing={2}>
              <Typography variant="body1" color="secondary">
                Programme :
              </Typography>
              <Typography variant="body1" color="gray">
                DRH
              </Typography>
            </InfoItems>
          </Grid>
        </Grid>
        <Grid container spacing={4} my={1}>
          <Grid item xs={12} md={12}>
            <InfoItems direction="row" spacing={2}>
              <Typography variant="body1" color="secondary">
                Poste occupé :
              </Typography>
              <Typography variant="body1" color="gray">
                Sécrétaire
              </Typography>
            </InfoItems>
          </Grid>
        </Grid>
        <Grid container spacing={4} my={1}>
          <Grid item xs={12} md={12}>
            <InfoItems direction="row" spacing={2}>
              <Typography variant="body1" color="secondary">
                Responsable RH :
              </Typography>
              <Typography variant="body1" color="gray">
                RADONIAINA
              </Typography>
            </InfoItems>
          </Grid>
        </Grid>
        <Grid container spacing={4} my={1}>
          <Grid item xs={4} md={4}>
            <Button color="inherit" fullWidth variant="outlined" startIcon={<AttachFileIcon />}>
                PJ  : Contrat_rakoto_randria.jpeg
            </Button>
          </Grid>
        </Grid>
      </DetailsContainer>
    </Container>
  );
};

export default DetailsContracts;

export const InfoItems = styled(Stack)(({ theme }) => ({}));

const DetailsContainer = styled("div")(({ theme }) => ({
  padding: 30,
  border: "1px solid #E0E0E0",
  borderRadius: 20,
}));
