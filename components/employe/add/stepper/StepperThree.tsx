import { TextField } from '@mui/material'
import React from 'react'
import { StepperContainer } from './StepperOne'

const StepperThree = () => {
  return (
    <StepperContainer spacing={2}>
      <TextField fullWidth id="outlined-basic" label="Téléphone" variant="outlined" />
      <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
      <TextField fullWidth id="outlined-basic" label="Contacts additionnels" variant="outlined" />
    </StepperContainer>
  )
}

export default StepperThree