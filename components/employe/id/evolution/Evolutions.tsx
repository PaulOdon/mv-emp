import {
  Button,
  Stack,
  styled,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoEmploye from "./InfoEmploye";
import ContratCard from "./ContratCard";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";

const Evolutions = () => {
  const contract = [1, 2, 3];
  return (
    <Container maxWidth="xl">
      <SectionEvolution>
        <NavigationContainer>
          <SectionNavigation>
            <Stack flexDirection={"row"}>
              <Link href="/">
                <Button color="info" variant="text" startIcon={<ArrowBack />}>
                  Retour
                </Button>
              </Link>
            </Stack>
            <Typography variant="h4">Evolution du poste</Typography>
          </SectionNavigation>
          <Divider />
        </NavigationContainer>

        <BodyEvolution>
          <InfoEmploye />
          <Stack>
            {contract.map((contrat) => (
              <ContratCard />
            ))}
          </Stack>
        </BodyEvolution>
      </SectionEvolution>
    </Container>
  );
};

export default Evolutions;

const BodyEvolution = styled(Stack)(({ theme }) => ({}));
const SectionEvolution = styled(Stack)(({ theme }) => ({}));

const NavigationContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  marginBottom: theme.spacing(2),
  flex: 1,
  width: "100%",
}));

const SectionNavigation = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: theme.spacing(1),
}));
