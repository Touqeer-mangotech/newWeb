import { Box, Grid, IconButton, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import Images from '../../assets/Images'
import Layout from '../../layout/Layout'
import colors from '../../styles/colors'

function Order() {
  return (
    <Layout>
        <Box sx={{p:1}}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Box sx={{borderRadius:"8px", bgcolor:colors.white}}>
                    <Box display="flex" justifyContent="center">
                    <Typography variant='h6' sx={{color:colors.secondary}}>My Orders</Typography>
                    </Box>
                    <TableContainer>
                    <Table >

                        <TableHead>
                            <TableRow>
                                <TableCell>Order Id</TableCell>
                                <TableCell>Product</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>#321</TableCell>
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
                                <TableCell>AED 100</TableCell>
                                <TableCell>
                                    <Box display="flex">
                                        <Typography sx={{
                                            py:0.8, px:2, fontSize:"12px",
                                            bgcolor: colors.secondary,
                                            color: colors.white,
                                            borderRadius: "14px",
                                            cursor: "pointer",
                                            '&:hover': {
                                                bgcolor: colors.primary,
                                                transition: '0.3s ease-in-out',
                                                }
                                        }}>
                                            Completed
                                        </Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{borderRadius:"8px", bgcolor:colors.white, minWidth: "400px", minHeight: "400px"}}>
                        <Box display="flex" justifyContent="center">
                            <Typography variant='h6' sx={{color:colors.secondary}}>Order</Typography>
                        </Box>
                        <Box p={1}>
                            <Typography fontWeight='bold'>Total Bill</Typography>
                        </Box>
                        <Box p={1} display="flex">
                            <Typography px={1}>Amount</Typography>
                            <Typography px={1} fontWeight='bold'>100</Typography>
                        </Box>
                        <Box p={1} display="flex">
                            <Typography px={1}>Delivery Charges</Typography>
                            <Typography px={1} fontWeight='bold'>100</Typography>
                        </Box>
                        <Box p={1} display="flex">
                            <Typography px={1}>Total</Typography>
                            <Typography px={1} fontWeight='bold'>200</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Layout>
  )
}

export default Order
