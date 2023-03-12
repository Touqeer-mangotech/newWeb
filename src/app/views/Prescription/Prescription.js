import { Box, Grid, IconButton, InputAdornment, Typography } from '@mui/material'
import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import colors from '../../styles/colors'
import InputField from '../../components/InputField'
import {CameraEnhanceTwoTone, EditLocationAlt} from '@mui/icons-material';
import AddressDialog from '../../components/Dialog/AddressDialog'
import PrescrptionCard from '../../components/Card/PrescrptionCard'
import {Description, DriveFolderUpload, BorderColor } from '@mui/icons-material';
 
function Prescription() {
    const [prescription,setPrescription] = useState("")
    const [open, setOpen] = useState(false)
  return (
    <Layout>
    <Grid container>
            <AddressDialog open={open} setOpen={()=>setOpen(!open)}/>
        <Grid item xs={12}>
        <Typography>Guide To Prescription</Typography>
            <Grid container spacing={3}>      
            <Grid item xs={4}>
                <PrescrptionCard content="Upload Prescriotion Image" icon={<DriveFolderUpload sx={{color:colors.secondary, fontSize:"100px"}}/>}/>
            </Grid>
            <Grid item xs={4}>
                <PrescrptionCard content="Fill Detail Regard Prescriotion" icon={<Description sx={{color:colors.secondary, fontSize:"100px"}}/>}/>
            </Grid>
            <Grid item xs={4}>
                <PrescrptionCard content="Give Delivery Address" icon={<BorderColor sx={{color:colors.secondary, fontSize:"100px"}}/>}/>
            </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <Grid container sx={{justifyContent:"center"}}>
                <Grid item xs={4}>
                    <Box sx={{display:'flex', justifyContent:'center', py:1}}>
                    <Typography variant='h6' sx={{color:colors.secondary}}>Upload Prescription</Typography>
                    </Box>
                    <Box sx={{p:1}}>
                    <InputField label="Upload Prescription"
                    disabled
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility"
                              onClick={() => setPrescription()}
                              edge="end">
                                <CameraEnhanceTwoTone/>                                  
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}/>
                      </Box>
                      <Box sx={{p:1}}>
                        <InputField label="Description"
                        multiline
                        rows={3}/>
                      </Box>
                      <Box sx={{p:1}}>
                    <InputField label="Upload Prescription"
                    disabled
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility"
                              onClick={()=>setOpen(!open)}
                              edge="end">
                                <EditLocationAlt/>                                  
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}/>
                      </Box>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    </Layout>
  )
}

export default Prescription
