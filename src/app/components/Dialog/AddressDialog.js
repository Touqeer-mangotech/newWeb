import { Box, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React from 'react'
import colors from '../../styles/colors'
import InputField from '../InputField'
import SimpleButton from '../Buttons/SimpleButton'
function AddressDialog({open, setOpen}) {
  return (
    <Dialog open={open} onClose={setOpen}
    PaperProps={{
        style: {
          borderRadius: "10px",
          minWidth: "400px",
          maxWidth: "400px"
        },
      }}>
        <Box sx={{display:"flex",  justifyContent:"center",
                  color:colors.secondary}}>
        <DialogTitle>Delivery Adresses</DialogTitle>
        </Box>
        <DialogContent>
            <Box sx={{py:1}}>
            <InputField label="Address 1"/>
            </Box>
            <Box sx={{py:1}}>
            <InputField label="Address 2"/>
            </Box>
            <Box sx={{py:1}}>
            <SimpleButton title="Add Address"/>
            </Box>
        </DialogContent>
    </Dialog>
  )
}

export default AddressDialog
