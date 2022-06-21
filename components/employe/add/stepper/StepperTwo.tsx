import { Stack, styled, TextField } from "@mui/material";
import React from "react";
import { StepperContainer } from "./StepperOne";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const StepperTwo = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <StepperContainer spacing={2}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Supérviseur</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //   value={age}
          label="Supérviseur"
          onChange={handleChange}
        >
          <MenuItem value={10}>Supérviseur Ten</MenuItem>
          <MenuItem value={20}>Supérviseur Twenty</MenuItem>
          <MenuItem value={30}>Supérviseur Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Lieu de travail</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //   value={age}
          label="Lieu de travail"
          onChange={handleChange}
        >
          <MenuItem value={10}>Lieu de travail Ten</MenuItem>
          <MenuItem value={20}>Lieu de travail Twenty</MenuItem>
          <MenuItem value={30}>Lieu de travail Thirty</MenuItem>
        </Select>
      </FormControl>
      <CustomStack direction={{xs: "column", sm: "column", md: "row"}} spacing={{xs: 2, sm:2, md:1}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Fonction</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Fonction"
            onChange={handleChange}
          >
            <MenuItem value={10}>Fonction Ten</MenuItem>
            <MenuItem value={20}>Fonction Twenty</MenuItem>
            <MenuItem value={30}>Fonction Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Programme</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Programme"
            onChange={handleChange}
          >
            <MenuItem value={10}>Programme Ten</MenuItem>
            <MenuItem value={20}>Programme Twenty</MenuItem>
            <MenuItem value={30}>Programme Thirty</MenuItem>
          </Select>
        </FormControl>
      </CustomStack>
      <CustomStack direction={{xs: "column", sm: "column", md: "row"}} spacing={{xs: 2, sm:2, md:1}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Catégorie"
            onChange={handleChange}
          >
            <MenuItem value={10}>Catégorie Ten</MenuItem>
            <MenuItem value={20}>Catégorie Twenty</MenuItem>
            <MenuItem value={30}>Catégorie Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Classe</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Classe"
            onChange={handleChange}
          >
            <MenuItem value={10}>Classe Ten</MenuItem>
            <MenuItem value={20}>Classe Twenty</MenuItem>
            <MenuItem value={30}>Classe Thirty</MenuItem>
          </Select>
        </FormControl>
      </CustomStack>
      <CustomStack direction={{xs: "column", sm: "column", md: "row"}} spacing={{xs: 2, sm:2, md:1}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Contrat en cours
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Contrat en cours"
            onChange={handleChange}
          >
            <MenuItem value={10}>Contrat en cours Ten</MenuItem>
            <MenuItem value={20}>Contrat en cours Twenty</MenuItem>
            <MenuItem value={30}>Contrat en cours Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Echellon 2018</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Echellon 2018"
            onChange={handleChange}
          >
            <MenuItem value={10}>Echellon 2018 Ten</MenuItem>
            <MenuItem value={20}>Echellon 2018 Twenty</MenuItem>
            <MenuItem value={30}>Echellon 2018 Thirty</MenuItem>
          </Select>
        </FormControl>
      </CustomStack>
      <CustomStack direction={{xs: "column", sm: "column", md: "row"}} spacing={{xs: 2, sm:2, md:1}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">SMIE</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="SMIE"
            onChange={handleChange}
          >
            <MenuItem value={10}>SMIE Ten</MenuItem>
            <MenuItem value={20}>SMIE Twenty</MenuItem>
            <MenuItem value={30}>SMIE Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          id="outlined-basic"
          label="N°SMIE"
          variant="outlined"
        />
      </CustomStack>
      <CustomStack direction={{xs: "column", sm: "column", md: "row"}} spacing={{xs: 2, sm:2, md:1}}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="N° CNAPS"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Date embauchee"
          variant="outlined"
        />
      </CustomStack>
    </StepperContainer>
  );
};

export default StepperTwo;

export const CustomStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));
