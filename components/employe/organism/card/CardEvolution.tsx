import React from "react";
import { Stack, styled, Typography } from "@mui/material";
import { InfoItems, OneCard, OneCardBody, OneCardHeader } from "./CardGeneral";

const CardEvolution = () => {
  return (
    <OneCard>
      <OneCardHeader>
        <Typography variant="h5" color="initial">
            Evolution de poste
        </Typography>
      </OneCardHeader>
      <OneCardBody spacing={1}>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Matricule :
          </Typography>
          <Typography variant="body1" color="gray">
            12346868696
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            N° CIN :
          </Typography>
          <Typography variant="body1" color="gray">
            123 123 123 123
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Date de 05 ans :
          </Typography>
          <Typography variant="body1" color="gray">
            12/01/1992
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Date de 10 ans :
          </Typography>
          <Typography variant="body1" color="gray">
            12/01/1992
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Date de 15 ans :
          </Typography>
          <Typography variant="body1" color="gray">
            13/04/1773
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Date de promotion :
          </Typography>
          <Typography variant="body1" color="gray">
            ANTANANARIVO
          </Typography>
        </InfoItems>
      </OneCardBody>
    </OneCard>
  );
};

export default CardEvolution;
