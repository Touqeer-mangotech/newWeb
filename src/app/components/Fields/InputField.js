import { FormControl, TextField } from '@mui/material'
import React from 'react'

function InputField(props) {
  return (
    <FormControl variant="standard" fullWidth >
      <TextField
        {...props}
        variant="outlined"
        error={props.error && true}
        InputProps={{
          endAdornment: props.InputProps?.endAdornment,
        }}
        {...props.register}
      />
    </FormControl>
  )
}

export default InputField