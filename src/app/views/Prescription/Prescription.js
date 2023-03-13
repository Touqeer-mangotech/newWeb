import { Box, Grid, IconButton, InputAdornment, Typography } from '@mui/material'
import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import colors from '../../styles/colors'
import InputField from '../../components/Fields/InputField'
import { CameraEnhanceTwoTone, EditLocationAlt, CloudUpload } from '@mui/icons-material';
import AddressDialog from '../../components/Dialog/AddressDialog'
import PrescrptionCard from '../../components/Card/PrescrptionCard'
import { Description, DriveFolderUpload, BorderColor } from '@mui/icons-material';
import SimpleButton from '../../components/Buttons/SimpleButton'

function Prescription() {
  const [prescription, setPrescription] = useState("")
  const [open, setOpen] = useState(false)
  return (
    <Layout>
      <Grid container sx={{ p: 2 }}>
        <AddressDialog open={open} setOpen={() => setOpen(!open)} />
        <Grid item xs={12}>
          {/* <Typography>Guide To Prescription</Typography> */}
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <PrescrptionCard content="Upload Image of Prescription" icon={<DriveFolderUpload sx={{ color: colors.secondary, fontSize: "80px" }} />} />
            </Grid>
            <Grid item xs={4}>
              <PrescrptionCard content="Fill Prescription Detail" icon={<Description sx={{ color: colors.secondary, fontSize: "80px" }} />} />
            </Grid>
            <Grid item xs={4}>
              <PrescrptionCard content="Give Your Delivery Address" icon={<BorderColor sx={{ color: colors.secondary, fontSize: "80px" }} />} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container sx={{ mt: 3, justifyContent: "center", }}>
            <Grid item xs={5} >
              <Box sx={{ px: 2, borderRadius: "8px", bgcolor: colors.white, boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 2px 0px` }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                  <Typography variant='h6' sx={{ color: colors.secondary, py: 1 }}>Upload Prescription</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", pt: 1 }}>
                  <CloudUpload sx={{
                    fontSize: "60px",
                    color: colors.primary,
                    cursor: 'pointer',
                    '&:hover': {
                      color: colors.secondary,
                      transition: '0.3s ease-in-out',
                    },
                  }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", }}>
                  <Typography > Upload Prescription Image </Typography>
                </Box>
                <Box sx={{ p: 1 }}>
                  <InputField label="Description"
                    multiline
                    rows={3} />
                </Box>
                <Box sx={{ p: 1 }}>
                  <InputField label="Select Address"
                    disabled
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="toggle password visibility"
                            onClick={() => setOpen(!open)}
                            edge="end">
                            <EditLocationAlt />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }} />
                </Box>
                <Box sx={{ px: 1, pb: 2 }}>
                  <SimpleButton title="Submit" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Prescription
