import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepperOne from "./stepper/StepperOne";
import StepperTwo from "./stepper/StepperTwo";
import StepperThree from "./stepper/StepperThree";
import StepperFour from "./stepper/StepperFour";
import StepperFive from "./stepper/StepperFive";
import { Stack, styled } from "@mui/material";

const steps = ["GENERAL", "TRAVAIL", "CONTACT", "BANQUE", "AUTRE"];

const SectFormRight = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%", borderRadius: "20px", background: "#fff" }}>
      <CustomStepper activeStep={activeStep} sx={{ py: 2 }}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step sx={{ m: 1 }} key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </CustomStepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {(() => {
            switch (activeStep) {
              case 0:
                return <StepperOne />;
              case 1:
                return <StepperTwo />;
              case 2:
                return <StepperThree />;
              case 3:
                return <StepperFour />;
              case 4:
                return <StepperFive />;
              default:
                return null;
            }
          })()}

          <ActionBtnContainer direction="row" spacing={2}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="text"
              color="warning"
              size="medium"
            >
              Precedent
            </Button>
            <Button onClick={handleNext} variant="contained" size="medium">
              {activeStep === steps.length - 1 ? "Terminer" : "Suivant"}
            </Button>
          </ActionBtnContainer>
        </React.Fragment>
      )}
    </Box>
  );
};

export default SectFormRight;

const CustomStepper = styled(Stepper)(({ theme }) => ({
  flexWrap: "wrap",
}));

export const ActionBtnContainer = styled(Stack)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  right: 0,
  paddingInline: 45,
  paddingBlock: 40,
  backgroundColor: "rgba(255, 255, 255, .5)",
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    padding: 5,
    justifyContent: "center",
  },
}));
