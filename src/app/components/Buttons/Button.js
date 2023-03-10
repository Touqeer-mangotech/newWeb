import React from 'react'
import { Button } from '@mui/material';
import colors from './../../styles/colors';

function AuthButton(props) {
  return (
    <Button
      variant='contained'
      {...props}
      sx={{
        width: "100%",
        textTransform: "capitalize",
        mt: 4,
        fontSize: 12,
        borderRadius: "8px",
        backgroundColor: colors.primary,
        "&:hover": {
          backgroundColor: colors.primary,
        }
      }}>
      {props.title}
    </Button>
  )
}

export default AuthButton