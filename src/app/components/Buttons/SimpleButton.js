import { Button } from '@mui/material'
import React from 'react'
import colors from '../../styles/colors'

export default function SimpleButton(props) {
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
  