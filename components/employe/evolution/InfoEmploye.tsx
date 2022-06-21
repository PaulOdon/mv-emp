import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import { InfoItems } from "../organism/card/CardGeneral";

const InfoEmploye = () => {
  return (
    <SectionInfo>
      <Grid container spacing={2} my={1}>
        <Grid item xs={12}>
          <InfoItems direction="row" spacing={2}>
            <Typography variant="subtitle2" color="primary">
              Matricule :
            </Typography>
            <Typography variant="subtitle2" color="gray">
              EMP 0001
            </Typography>
          </InfoItems>
        </Grid>
      </Grid>
      <Grid container spacing={2} my={1}>
        <Grid item xs={6}>
          <InfoItems direction="row" spacing={2}>
            <Typography variant="subtitle2" color="primary">
              Nom :
            </Typography>
            <Typography variant="subtitle2" color="gray">
              RAKOTO
            </Typography>
          </InfoItems>
        </Grid>
        <Grid item xs={6}>
          <InfoItems direction="row" spacing={2}>
            <Typography variant="subtitle2" color="primary">
              Prénoms :
            </Typography>
            <Typography variant="subtitle2" color="gray">
              Prénoms
            </Typography>
          </InfoItems>
        </Grid>
      </Grid>
      <Grid container spacing={2} my={1}>
        <Grid item xs={6}>
          <InfoItems direction="row" spacing={2}>
            <Typography variant="subtitle2" color="primary">
              Adresse :
            </Typography>
            <Typography variant="subtitle2" color="gray">
              Lor 1000 / IA Antaninandro
            </Typography>
          </InfoItems>
        </Grid>
        <Grid item xs={6}>
          <InfoItems direction="row" spacing={2}>
            <Typography variant="subtitle2" color="primary">
              Téléphone :
            </Typography>
            <Typography variant="subtitle2" color="gray">
              0343403434
            </Typography>
          </InfoItems>
        </Grid>
      </Grid>
    </SectionInfo>
  );
};

export default InfoEmploye;

const SectionInfo = styled("div")(({ theme }) => ({
  padding: 15,
}));
