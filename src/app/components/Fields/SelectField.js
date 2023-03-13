import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import colors from './../../styles/colors';

function SelectField(props) {
  return (
    <FormControl fullWidth sx={{
      backgroundColor: colors.white,
      borderRadius: "8px",
      "& .MuiFormControl-root": {},
      "& .MuiInputLabel-root": { fontSize: "12px" },
      // "& .MuiOutlinedInput-notchedOutline": { border: 0 }
    }} size="small" >
      <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value=""
        label="Address"
      >
        {props.data.map((item, index) => (
          <MenuItem key={index} >{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectField