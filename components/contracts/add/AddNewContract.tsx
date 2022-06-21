import {
  Button,
  Container,
  styled,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Grid,
  Divider,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Check, Close, Save } from "@mui/icons-material";

const AddNewContract = () => {
  return (
    <Container maxWidth="xl" sx={{ pb: 5 }}>
      <NavigationContainer>
        <SectionNavigation>
          <Stack flexDirection={"row"}>
            <Link href="/employe/contracts">
              <Button color="info" variant="text" startIcon={<ArrowBack />}>
                Retour
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<Check />}
              sx={{ marginInline: 3 }}
            >
              Enregistrer
            </Button>
            <Button
              variant="text"
              color="warning"
              size="small"
              startIcon={<Close />}
              sx={{ marginInline: 3 }}
            >
              Annuler
            </Button>
          </Stack>
          <Typography variant="h4">Ajouter contrat</Typography>
        </SectionNavigation>
        <Divider />
      </NavigationContainer>

      <FormContainer spacing={2}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Réference"
          variant="outlined"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Employé</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Employé"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Employé Ten</MenuItem>
            <MenuItem value={20}>Employé Twenty</MenuItem>
            <MenuItem value={30}>Employé Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type de contrat</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Type de contrat"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Type de contrat Ten</MenuItem>
            <MenuItem value={20}>Type de contrat Twenty</MenuItem>
            <MenuItem value={30}>Type de contrat Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Statut</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Statut"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Statut Ten</MenuItem>
            <MenuItem value={20}>Statut Twenty</MenuItem>
            <MenuItem value={30}>Statut Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Salaire de base"
          variant="outlined"
        />

        <CustomStack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={{ xs: 2, sm: 2, md: 1 }}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Date de début"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Date de fin"
            variant="outlined"
          />
        </CustomStack>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Programme</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Programme"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Programme Ten</MenuItem>
            <MenuItem value={20}>Programme Twenty</MenuItem>
            <MenuItem value={30}>Programme Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Poste occupé</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Poste occupé"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Poste occupé Ten</MenuItem>
            <MenuItem value={20}>Poste occupé Twenty</MenuItem>
            <MenuItem value={30}>Poste occupé Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Responsable RH</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Responsable RH"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Responsable RH Ten</MenuItem>
            <MenuItem value={20}>Responsable RH Twenty</MenuItem>
            <MenuItem value={30}>Responsable RH Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button
          color="inherit"
          fullWidth
          variant="outlined"
          startIcon={<AttachFileIcon />}
        >
          PJ : Contrat_rakoto_randria.jpeg
        </Button>
      </FormContainer>
    </Container>
  );
};

export default AddNewContract;

export const CustomStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

const FormContainer = styled(Stack)(({ theme }) => ({
  padding: 30,
  // border: "1px solid #E0E0E0",
  borderRadius: 20,
  background: "#fff",
}));

const NavigationContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  marginBottom: theme.spacing(2),
  flex: 1,
  width: "100%",
}));

const SectionNavigation = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: "5px",
}));
