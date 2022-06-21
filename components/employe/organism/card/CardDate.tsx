import React from "react";
import { Stack, styled, Typography } from "@mui/material";
import { InfoItems, OneCard, OneCardBody, OneCardHeader } from "./CardGeneral";

const CardDate = () => {
  return (
    <OneCard>
      <OneCardHeader>
        <Typography variant="h5" color="initial">
          Date
        </Typography>
      </OneCardHeader>
      <OneCardBody spacing={1}>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Banque :
          </Typography>
          <Typography variant="body1" color="gray">
            Société Générale
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Code banque :
          </Typography>
          <Typography variant="body1" color="gray">
            00314
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Code Agence :
          </Typography>
          <Typography variant="body1" color="gray">
            12333
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Clé RIB :
          </Typography>
          <Typography variant="body1" color="gray">
            122333
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Prêts bancaire :
          </Typography>
          <Typography variant="body1" color="gray">
            10000000
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Date de début du prêt :
          </Typography>
          <Typography variant="body1" color="gray">
            10/01/2016
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Date fin du prêt :
          </Typography>
          <Typography variant="body1" color="gray">
            10/01/2017
          </Typography>
        </InfoItems>
      </OneCardBody>
    </OneCard>
  );
};

export default CardDate;
