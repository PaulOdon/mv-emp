import { Stack, styled, TextField } from "@mui/material";
import React from "react";

const StepperOne = () => {
  return (
    <StepperContainer spacing={2}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Matricule"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="N° CIN"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Date de délivrance"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Lieu de délivrance"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Date de naissance"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Lieu de naissance"
        variant="outlined"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Adresse"
        variant="outlined"
      />
    </StepperContainer>
  );
};

export default StepperOne;

export const StepperContainer = styled(Stack)(({ theme }) => ({
  padding: 15,
  // border: "1px solid #E0E0E0",
  borderRadius: 20,
}));
