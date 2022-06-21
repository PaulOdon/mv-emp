import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import { InfoItems } from "../../organism/card/CardGeneral";

const ContratCard = () => {
  return (
    <BodyEvolution>
      <Typography variant="subtitle1" color="initial">
        CONTRAT0001
      </Typography>
      <Grid container spacing={2} my={1}>
        <Grid item xs={6}>
          <InfoItems direction="row" spacing={2}>
            <Typography variant="subtitle2" color="secondary">
              Type de contrat :
            </Typography>
            <Typography variant="subtitle2" color="gray">
              CDI
            </Typography>
          </InfoItems>
        </Grid>
        <Grid item xs={6}>
          <InfoItems direction="row" spacing={2}>
            <Typography variant="subtitle2" color="secondary">
              Statut :
            </Typography>
            <Typography variant="subtitle2" color="gray">
              En cours
            </Typography>
          </InfoItems>
        </Grid>
      </Grid>
      <Grid container spacing={2} my={1}>
        <Grid item xs={6}>
          <InfoItems direction="row" spacing={2}>
            <Typography variant="subtitle2" color="secondary">
              Date de début :
            </Typography>
            <Typography variant="subtitle2" color="gray">
              02/01/2021
            </Typography>
          </InfoItems>
        </Grid>
        <Grid item xs={6}>
          <InfoItems direction="row" spacing={2}>
            <Typography variant="subtitle2" color="secondary">
              Date de fin :
            </Typography>
            <Typography variant="subtitle2" color="gray">
              30/12/2022
            </Typography>
          </InfoItems>
        </Grid>
      </Grid>
      <Grid container spacing={2} my={1}>
        <Grid item xs={6}>
          <InfoItems direction="row" spacing={2}>
            <Typography variant="subtitle2" color="secondary">
              Programme :
            </Typography>
            <Typography variant="subtitle2" color="gray">
              DRH
            </Typography>
          </InfoItems>
        </Grid>
        <Grid item xs={6}>
          <InfoItems direction="row" spacing={2}>
            <Typography variant="subtitle2" color="secondary">
              Poste occupé :
            </Typography>
            <Typography variant="subtitle2" color="gray">
              Sécrétaire
            </Typography>
          </InfoItems>
        </Grid>
      </Grid>
    </BodyEvolution>
  );
};

export default ContratCard;

const BodyEvolution = styled("div")(({ theme }) => ({
  padding: 25,
  border: "1px solid #E0E0E0",
  borderRadius: 20,
  marginBlock: 15,
  background: "#fff",
  margin: theme.spacing(2),
}));
