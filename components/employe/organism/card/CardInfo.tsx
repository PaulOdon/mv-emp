import { Box, styled, Grid, } from "@mui/material";
import React from "react";
import CardGeneral from "./CardGeneral";
import CardEvolution from "./CardEvolution";
import CardDate from "./CardDate";
import CardTravail from "./CardTravail";
import CardAutre from "./CardAutre";

const CardInfo = () => {
  return (
    <DetailSection>
      <Grid container spacing={5}>
        <Grid item md={6}>
          <CardGeneral />
        </Grid>
        <Grid item md={6}>
          <CardEvolution />
        </Grid>
        <Grid item md={6}>
          <CardDate />
        </Grid>
        <Grid item md={6}>
          <CardTravail />
        </Grid>
        <Grid item md={6}>
          <CardAutre />
        </Grid>
      </Grid>
    </DetailSection>
  );
};

export default CardInfo;



const DetailSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  // justifyContent: "space-between"
}));
