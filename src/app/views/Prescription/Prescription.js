import { Box, Button, CardMedia, Grid, IconButton, InputAdornment, Typography } from '@mui/material'
import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import colors from '../../styles/colors'
import InputField from '../../components/Fields/InputField'
import { CameraEnhanceTwoTone, EditLocationAlt, CloudUpload, GiteRounded } from '@mui/icons-material';
import AddressDialog from '../../components/Dialog/AddressDialog'
import { Description, DriveFolderUpload, BorderColor } from '@mui/icons-material';
import SimpleButton from '../../components/Buttons/SimpleButton'
import PrescriptionCard from '../../components/Card/PrescriptionCard'
import DataField from '../../components/Fields/DataField'

function Prescription() {
  const [prescription, setPrescription] = useState("")
  const [selectedFile, setSelectedFile] = useState("");
  const [image, setImage] = useState('')
  const [open, setOpen] = useState(false)

  const handleImageChange = (event) => {
    console.log(event.target.files[0])
    const data = URL.createObjectURL(event.target.files[0])
    setImage(data)

  }
  return (
    <Layout>
      <Grid container sx={{ p: 2 }}>
        <AddressDialog open={open} setOpen={() => setOpen(!open)} />
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={12} py={3}>
              <PrescriptionCard title="First" content="Upload Image of Prescription" icon={<DriveFolderUpload sx={{ color: colors.ufoGreen, fontSize: "60px" }} />} />
            </Grid>
            <Grid item xs={12} pb={3} pt={1}>
              <PrescriptionCard title="Second" content="Fill Prescription Detail" icon={<Description sx={{ color: colors.frontHeart, fontSize: "60px" }} />} />
            </Grid>
            <Grid item xs={12} py={1}>
              <PrescriptionCard title="Third" content="Give Your Delivery Address" icon={<GiteRounded sx={{ color: colors.front2, fontSize: "62px" }} />} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={8} py={4}>
          <Grid container sx={{ mt: 3, justifyContent: "center", }}>
            <Grid item xs={12} >
              <Box sx={{ px: 2, borderRadius: "12px", bgcolor: colors.white, boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 2px 0px` }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                  <Typography variant='h6' sx={{
                    py: 1, fontWeight: "bold",
                  }}>Upload Prescription</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", pt: 1, flexDirection: "column", alignItems: "center" }}>
                  {
                    image !== "" &&
                    <CardMedia component={'img'} image={image} sx={{ height: "150px", width: "150px", objectFit: "contain" }} />
                  }

                  <Box sx={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                    <span
                      className="btn btn-primary btn-file"
                      style={{
                        position: "relative", overflow: "hidden",
                        color: "white", height: "50px", width: "fit-content",
                        padding: "15px", borderRadius: "5px", cursor: "pointer",
                        display: "flex", alignItems: "center", gap: "10px",
                      }}
                    >
                      <CloudUpload sx={{
                        fontSize: "60px", color: colors.primary, cursor: 'pointer',
                        '&:hover': {
                          color: colors.secondary,
                          transition: '0.3s ease-in-out',
                        },
                      }} />
                      <input
                        // multiple
                        type="file"
                        style={{
                          position: " absolute", filter: "alpha(opacity=0)",
                          top: "0", right: "0", align: "right",
                          minWidth: "100%", minHeight: "100%", fontSize: " 100px",
                          opacity: "0", outline: "none", background: "white",
                          cursor: "inherit", display: "block",
                        }}

                        onChange={(event) => {
                          handleImageChange(event)
                        }
                        }
                      />
                    </span>
                    {/* {
                      image !== ""
                    }
                    <Button >Clear Image</Button> */}
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", pb: 1 }}>
                  <Typography variant='body1' > Upload Prescription Image </Typography>
                </Box>
                <Box sx={{ p: 1 }}>
                  <DataField label="Description"
                    multiline
                    rows={3} />
                </Box>
                <Box sx={{ p: 1 }}>
                  <DataField label="Select Address"
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
                <Box sx={{ px: 1, pb: 6 }}>
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
