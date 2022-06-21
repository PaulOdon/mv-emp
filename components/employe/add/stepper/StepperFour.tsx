import { Box, TextField } from '@mui/material'
import React from 'react'
import { StepperContainer } from './StepperOne'
import { CustomStack } from './StepperTwo'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const StepperFour = () => {
  return (
    <StepperContainer spacing={2}>
     <CustomStack direction={{xs: "column", sm: "column", md: "row"}} spacing={{xs: 2, sm:2, md:1}}>
        <TextField fullWidth id="outlined-basic" label="Banque" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Code Banque" variant="outlined" />
      </CustomStack>
      <CustomStack direction={{xs: "column", sm: "column", md: "row"}} spacing={{xs: 2, sm:2, md:1}}>
        <TextField fullWidth id="outlined-basic" label="Code Agence" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="N° de compte" variant="outlined" />
      </CustomStack>
      <CustomStack direction={{xs: "column", sm: "column", md: "row"}} spacing={{xs: 2, sm:2, md:1}} alignItems="center">
        <Box flex={2}>
          <TextField fullWidth id="outlined-basic" label="Clé RIB" variant="outlined" />
        </Box>
        <Box flex={2}>
          <FormControlLabel control={<Switch defaultChecked />} label="Prêt bancaire" />
        </Box>
      </CustomStack>
      <CustomStack direction={{xs: "column", sm: "column", md: "row"}} spacing={{xs: 2, sm:2, md:1}}>
        <TextField fullWidth id="outlined-basic" label="Date de début du prêt" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Date fin du prêt" variant="outlined" />
      </CustomStack>
    </StepperContainer>
  )
}

export default StepperFour