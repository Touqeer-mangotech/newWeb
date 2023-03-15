import { Box, Dialog, DialogContent, DialogTitle, Radio, Typography } from '@mui/material'
import React, { useState } from 'react'
import { DeleteOutline, Edit } from '@mui/icons-material';
import colors from '../../styles/colors'
import InputField from '../Fields/InputField'
import SimpleButton from '../Buttons/SimpleButton'
import { useNavigate } from 'react-router-dom'

function AddressDialog({ open, setOpen }) {
  console.log("🚀 ~ file: AddressDialog.js:10 ~ AddressDialog ~ setOpen:", setOpen)
  console.log("🚀 ~ file: AddressDialog.js:10 ~ AddressDialog ~ open:", open)
  const navigate = useNavigate()
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Dialog open={open} onClose={setOpen}
      PaperProps={{
        style: {
          borderRadius: "10px",
          minWidth: "500px",
          maxWidth: "500px"
        },
      }}>
      <Box sx={{
        display: "flex", justifyContent: "center", fontWeight: "bold"
        // color: colors.secondary
      }}>
        <DialogTitle>Delivery Addresses</DialogTitle>
      </Box>
      <DialogContent>
        <Box sx={{ py: 1, display: "flex" }} >
          <Box sx={{ pr: 1 }}>
            <Radio
              checked={selectedValue === 'a'}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}
            />
          </Box>
          <Box display="flex" justifyContent="space-between" width="100%" >
            <Box sx={{ px: 1, maxWidth: "300px" }}>
              <Typography sx={{
                textOverflow: "ellipsis", overflow: "hidden",
                whiteSpace: "nowrap", fontWeight: "bold"
              }}>
                Address Line 1asdsads adsad sadasd asdasda sda</Typography>
              <Typography>U.A.E</Typography>
            </Box>
            <Box sx={{ pr: 0.5 }}>
              <Edit sx={{
                mx: 1, color: colors.primary, cursor: 'pointer',
                '&:hover': { color: colors.secondary, transition: '0.3s ease-in-out', },
              }} />
              <DeleteOutline sx={{
                color: colors.primary, cursor: 'pointer',
                '&:hover': {
                  color: colors.secondary, transition: '0.3s ease-in-out',
                },
              }} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ py: 1 }}>
          <SimpleButton title="Add New Address"
            onClick={() => navigate('/order-address')} />
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default AddressDialog
