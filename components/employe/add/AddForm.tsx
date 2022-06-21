import {
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import SectFormLeft from "./SectFormLeft";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import SectFormRight from "./SectFormRight";
import { SectionNavigation } from "../../contracts/ListContract";

const AddForm = () => {
  return (
    <Container maxWidth="xl">
      <SectionNavigation
        direction="row"
        sx={{ mb: 1 }}
        justifyContent="space-between"
      >
        <Stack flexDirection={"row"} width={350} justifyContent="space-between">
          <Link href="/">
            <Button color="info" variant="text" startIcon={<ArrowBackIcon />}>
              Retour
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<DoneIcon />}
          >
            Enregistrer
          </Button>
          <Button
            variant="text"
            color="warning"
            size="small"
            startIcon={<CloseIcon />}
          >
            Annuler
          </Button>
        </Stack>
        <Typography variant="h4" color="GrayText">
          Ajouter un employé
        </Typography>
      </SectionNavigation>
      <Divider />
      <Grid container spacing={4} py={2}>
        <Grid item xs={12} md={4}>
          <SectFormLeft />
        </Grid>
        <Grid item xs={12} md={8}>
          <SectFormRight />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddForm;
