import React from "react";
import { InfoItems, OneCard, OneCardBody, OneCardHeader } from "./CardGeneral";
import { Typography } from "@mui/material";

const CardTravail = () => {
  return (
    <OneCard>
      <OneCardHeader>
        <Typography variant="h5" color="initial">
          Travail
        </Typography>
      </OneCardHeader>
      <OneCardBody spacing={1}>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Lieu :
          </Typography>
          <Typography variant="body1" color="gray">
            Antanambao
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Fonction :
          </Typography>
          <Typography variant="body1" color="gray">
            Assistante RH
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Programme :
          </Typography>
          <Typography variant="body1" color="gray">
            RH
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Catégorie :
          </Typography>
          <Typography variant="body1" color="gray">
            4
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Classe :
          </Typography>
          <Typography variant="body1" color="gray">
            Description de la classe
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Type de contrat :
          </Typography>
          <Typography variant="body1" color="gray">
            CDD
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            N°SMIE :
          </Typography>
          <Typography variant="body1" color="gray">
            123333
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            N° CNAPS :
          </Typography>
          <Typography variant="body1" color="gray">
            7627962
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Echellon 2018 :
          </Typography>
          <Typography variant="body1" color="gray">
            Echellon 2018
          </Typography>
        </InfoItems>
      </OneCardBody>
    </OneCard>
  );
};

export default CardTravail;
