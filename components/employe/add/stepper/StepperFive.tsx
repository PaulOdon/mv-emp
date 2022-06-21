import React from "react";
import { StepperContainer } from "./StepperOne";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";

const StepperFive = () => {
  return (
    <StepperContainer spacing={2}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Nb d’enfant"
        variant="outlined"
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Utilisateur lié</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Utilisateur lié"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Utilisateur lié Ten</MenuItem>
          <MenuItem value={20}>Utilisateur lié Twenty</MenuItem>
          <MenuItem value={30}>Utilisateur lié Thirty</MenuItem>
        </Select>
      </FormControl>
    </StepperContainer>
  );
};

export default StepperFive;
