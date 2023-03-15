import React from 'react'
import { FormControl, TextField } from '@mui/material'

function DataField(props) {
  return (
    <FormControl variant="standard" fullWidth sx={{
      my: 1.5,
      borderRadius: 15
    }}>
      <TextField
        {...props}
        variant="outlined"
        // size="small"
        error={props.error && true}
        InputProps={{
          endAdornment: props.InputProps?.endAdornment,
          style: { borderRadius: 8 }
        }}
        {...props.register}
      />
    </FormControl>
  )
}

export default DataField