import {
  Avatar,
  TextField,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { BorderProfile } from "../Details";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const SectFormLeft = () => {
  return (
    <FormLeftContainer>
      <InputContainer>
        <BorderProfile>
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton
              sx={{
                width: 170,
                height: 170,
                borderRadius: "50%",
                flexDirection: "column",
              }}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <AddAPhotoIcon fontSize="medium" />
              <Typography variant="button" color="primary">
                Ajouter photo
              </Typography>
            </IconButton>
          </label>
        </BorderProfile>
        <Typography variant="body2" color="GrayText">
          Type de fichier : *.jpeg, *png, *pjg
        </Typography>
      </InputContainer>
      <TextFieldContainer spacing={2} my={4}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Nom"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Prénom"
          variant="outlined"
        />
      </TextFieldContainer>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Femme" />
          <FormControlLabel value="male" control={<Radio />} label="Homme" />
        </RadioGroup>
      </FormControl>
    </FormLeftContainer>
  );
};

export default SectFormLeft;

const TextFieldContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
}));

const InputContainer = styled(Stack)(({ theme }) => ({}));

const Input = styled("input")({
  display: "none",
});

const FormLeftContainer = styled("div")(({ theme }) => ({
  padding: 30,
  // border: "1px solid #E0E0E0",
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  background: "#fff",
}));
