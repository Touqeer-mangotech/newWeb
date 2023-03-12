import React from 'react'
import { Box, Grid, IconButton, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import {EditLocationAlt, AddCircleOutline, RemoveCircleOutline, DeleteOutline, Edit, CloudUpload } from '@mui/icons-material';
import Images from '../../assets/Images'
import InputField from '../../components/InputField'
import Layout from '../../layout/Layout'
import SimpleButton from '../../components/Buttons/SimpleButton';
import colors from '../../styles/colors';

function RequestMedication() {
  return (
    <Layout>
        <Grid container spacing={2} >
            <Grid item xs={12} md={8} sx={{px:1}}>
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Typography variant='h5' fontWeight="bold">Request a medication</Typography>
                </Box>
                <TableContainer>
                    <Table sx={{borderRadius: "8px"}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                    <Box sx={{px:1}}>
                                        <img src={Images.capsule} alt="MImg" style={{width:"60px", height:"60px"}}/>
                                    </Box>
                                    <Box sx={{px:1}}>
                                        <Typography>MedicinceName</Typography>
                                    </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box sx={{
                                        display: 'flex',
                                        p: '1px 1px',mb: 1.3,
                                        }}>
                                    <RemoveCircleOutline sx={{
                                        color:colors.primary,
                                        cursor: 'pointer',
                        '&:hover': {
                          color: colors.secondary,
                          transition: '0.3s ease-in-out',
                        },}}/>
                                    <Typography sx={{mx:1}}>Count</Typography>
                                    <AddCircleOutline sx={{
                                        color:colors.primary,
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: colors.secondary,
                                            transition: '0.3s ease-in-out',
                                            },}}/>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                <Edit sx={{
                                        mx:1,
                                        color:colors.primary,
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: colors.secondary,
                                            transition: '0.3s ease-in-out',
                                            },}}/>
                                <DeleteOutline sx={{
                                        color:colors.primary,
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: colors.secondary,
                                            transition: '0.3s ease-in-out',
                                            },}}/>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box sx={{ borderRadius:"8px",}}>
                <Box sx={{display:"flex", justifyContent:"center", py:2}}>
                    <Typography variant='h6'> Place Order </Typography>
                </Box>
                <Box sx={{py:1}}>
                <InputField label="Medicine Name"/>
                </Box>
                <Box sx={{display:"flex", justifyContent:"center", py:0.5}}>
                    <Typography variant='h6'> Upload Image </Typography>
                </Box>
                <Box sx={{ display:"flex", justifyContent:"center", py:1}}>
                    <CloudUpload sx={{
                                        fontSize: "50px",
                                        color:colors.primary,
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: colors.secondary,
                                            transition: '0.3s ease-in-out',
                                            },}}/>
                </Box>
                <Box sx={{display:"flex", justifyContent:"center", py:1}}>
                    <Typography variant='h6'> Address </Typography>
                </Box>
                <Box sx={{py:1}}>
                <InputField label="Add Address"
                    disabled
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton aria-label="address label"
                            //   onClick={()=>setOpen(!open)}
                              edge="end">
                                <EditLocationAlt/>                                  
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}/>
                </Box>
                <Box sx={{py:1}}>
                    <SimpleButton title="Proceed"/>
                </Box>
                </Box>
            </Grid>
        </Grid>
    </Layout>
  )
}

export default RequestMedication
