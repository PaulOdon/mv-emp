import React from 'react'
import { Typography } from "@mui/material";
import { InfoItems, OneCard, OneCardBody, OneCardHeader } from "./CardGeneral";

const CardAutre = () => {
  return (
    <OneCard>
      <OneCardHeader>
        <Typography variant="h5" color="initial">
            Autre
        </Typography>
      </OneCardHeader>
      <OneCardBody spacing={1}>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Utilisateur lié :
          </Typography>
          <Typography variant="body1" color="gray">
            Nom utilisateur
          </Typography>
        </InfoItems>
      </OneCardBody>
    </OneCard>
  )
}

export default CardAutre