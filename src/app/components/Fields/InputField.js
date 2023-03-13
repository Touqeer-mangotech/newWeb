import { FormControl, TextField } from '@mui/material'
import React from 'react'

function InputField(props) {
  return (
    <FormControl variant='standard' fullWidth>
      <TextField
        {...props}
        variant="outlined"
      // size="small"
      />
    </FormControl>
  )
}

export default InputField