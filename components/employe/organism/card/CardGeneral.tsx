import React from "react";
import { Stack, styled, Typography } from "@mui/material";

const CardGeneral = () => {
  return (
    <OneCard>
      <OneCardHeader>
        <Typography variant="h5" color="initial">
          Générale
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
            Date de délivrance :
          </Typography>
          <Typography variant="body1" color="gray">
            12/01/1992
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Lieu de délivrance :
          </Typography>
          <Typography variant="body1" color="gray">
            FIANARANTSOA
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Date de naissance :
          </Typography>
          <Typography variant="body1" color="gray">
            13/04/1773
          </Typography>
        </InfoItems>
        <InfoItems direction="row" spacing={2}>
          <Typography variant="body1" color="secondary">
            Lieu de naissance :
          </Typography>
          <Typography variant="body1" color="gray">
            ANTANANARIVO
          </Typography>
        </InfoItems>
      </OneCardBody>
    </OneCard>
  );
};

export default CardGeneral;

export const OneCardBody = styled(Stack)(({ theme }) => ({}));

export const OneCardHeader = styled("div")(({ theme }) => ({}));

export const InfoItems = styled(Stack)(({ theme }) => ({}));

export const OneCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  // border: "1px solid #E0E0E0",
  borderRadius: 20,
  padding: 25,
  background: "#fff",
}));
