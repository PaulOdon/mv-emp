import React from "react";
import Container from "@mui/material/Container";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CardInfo from "./organism/card/CardInfo";
import Link from "next/link";
import useBasePath from "../../hooks/useBasePath";
import { ArrowBack, Close, Done, Edit } from "@mui/icons-material";

const Details = () => {
  const basePath = useBasePath();
  return (
    <DetailEmployeWrapper maxWidth="xl">
      <NavigationContainer>
        <SectionNavigation>
          <Stack flexDirection={"row"}>
            <Link href="/">
              <Button color="info" variant="text" startIcon={<ArrowBack />}>
                Retour
              </Button>
            </Link>
            <Button
              variant="text"
              color="primary"
              size="small"
              startIcon={<Edit />}
              sx={{ marginInline: 3 }}
            >
              Modifier
            </Button>
            <Link href="/employe/1/badge">
              <Button variant="text" color="info" startIcon={<BadgeIcon />}>
                Voir le Badge
              </Button>
            </Link>
            <Link href="/employe/1/evolution">
              <Button
                variant="text"
                color="info"
                sx={{ marginInline: 3 }}
                startIcon={<VisibilityIcon />}
              >
                Afficher l’évolution de poste
              </Button>
            </Link>
          </Stack>
          <Typography variant="h4">Détail d'un employé</Typography>
        </SectionNavigation>
        <Divider />
      </NavigationContainer>

      <Grid container spacing={4} pb={5}>
        <Grid item xs={12} md={3}>
          <ProfileSection>
            <BorderProfile>
              <Avatar
                alt="Remy Sharp"
                src={`${basePath}/images/ogino.jpg`}
                sx={{ width: 170, height: 170 }}
              />
            </BorderProfile>
            <Stack spacing={2} alignItems="center">
              <Typography variant="h4" color="initial">
                Anna Tracy
              </Typography>
              <Typography variant="h6" color="primary">
                Administration
              </Typography>
              <Typography variant="h6" color="GrayText">
                anna@gmail.tracy
              </Typography>
              <Typography variant="h6" color="GrayText">
                034 11 321 22
              </Typography>
            </Stack>
          </ProfileSection>
        </Grid>
        <Grid item xs={12} md={9}>
          <CardInfo />
        </Grid>
      </Grid>
    </DetailEmployeWrapper>
  );
};

export default Details;

const DetailEmployeWrapper = styled(Container)(({ theme }) => ({
  borderRadius: "20px",
  marginBottom: theme.spacing(2),
}));

const SectionNavigation = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: "5px",
}));

const NavigationContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  marginBottom: theme.spacing(2),
}));

export const BorderProfile = styled("span")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 25,
  width: 200,
  height: 200,
  borderRadius: "50%",
  border: "1px dashed #E0E0E0",
}));

const ProfileSection = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // marginBlock: 25,
  background: "#fff",
  paddingBlock: theme.spacing(3),
  borderRadius: "20px",
}));
