import {
  Avatar,
  Button,
  Container,
  Grid,
  Stack,
  styled,
  Divider,
  Typography,
} from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import React from "react";
import Link from "next/link";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { InfoItems } from "../../organism/card/CardGeneral";
import Logo from "../../../Images/Logo/Logo";
import QrCode from "../../../Images/QrCode";
import { BorderProfile } from "../../Details";
import useBasePath from "../../../../hooks/useBasePath";
import Print from "@mui/icons-material/Print";

const BadgeEmploye = () => {
  const basePath = useBasePath();
  return (
    <Container maxWidth="xl">
      <SectionBadge>
        <NavigationContainer>
          <SectionNavigation>
            <Stack flexDirection={"row"}>
              <Link href="/">
                <Button color="info" variant="text" startIcon={<ArrowBack />}>
                  Retour
                </Button>
              </Link>
              <Button
                variant="contained"
                color="info"
                size="small"
                startIcon={<Print />}
                sx={{ marginInline: 3 }}
              >
                Imprimer
              </Button>
            </Stack>
            <Typography variant="h4">Badge</Typography>
          </SectionNavigation>
          <Divider />
        </NavigationContainer>

        <BodyBadge>
          <SectionTop
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            px={6}
          >
            <Logo />
            <QrCode />
          </SectionTop>
          <SectionBottom
            direction="row"
            spacing={15}
            alignItems="center"
            justifyContent="space-between"
          >
            <BorderProfile>
              <Avatar
                alt="Remy Sharp"
                src={`${basePath}/images/ogino.jpg`}
                sx={{ width: 170, height: 170 }}
              />
            </BorderProfile>
            <SectionInfo>
              <InfoItems direction="row" spacing={2} my={1}>
                <Typography variant="h6" color="secondary">
                  MATRICULE :
                </Typography>
                <Typography variant="h6" color="gray">
                  12346868696
                </Typography>
              </InfoItems>
              <InfoItems direction="row" spacing={2} my={1}>
                <Typography variant="h6" color="secondary">
                  NOM :
                </Typography>
                <Typography variant="h6" color="gray">
                  AINA
                </Typography>
              </InfoItems>
              <InfoItems direction="row" spacing={2} my={1}>
                <Typography variant="h6" color="secondary">
                  PRENOM :
                </Typography>
                <Typography variant="h6" color="gray">
                  Mitia
                </Typography>
              </InfoItems>
              <InfoItems direction="row" spacing={2} my={1}>
                <Typography variant="h6" color="secondary">
                  FONCTION :
                </Typography>
                <Typography variant="h6" color="gray">
                  Sécrétaire
                </Typography>
              </InfoItems>
              <InfoItems direction="row" spacing={2} my={1}>
                <Typography variant="h6" color="secondary">
                  PROGRAMME :
                </Typography>
                <Typography variant="h6" color="gray">
                  RH
                </Typography>
              </InfoItems>
            </SectionInfo>
          </SectionBottom>
        </BodyBadge>
      </SectionBadge>
    </Container>
  );
};

export default BadgeEmploye;

const SectionTop = styled(Stack)(({ theme }) => ({}));
const SectionBottom = styled(Stack)(({ theme }) => ({}));
const SectionInfo = styled("div")(({ theme }) => ({}));

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

const BodyBadge = styled("div")(({ theme }) => ({
  border: "1px solid #E0E0E0",
  borderRadius: 20,
  padding: 38,
  marginBlock: 16,
  background: "#fff",
}));

const SectionBadge = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
