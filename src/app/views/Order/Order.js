import { Box, Grid, IconButton, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import Images from '../../assets/Images'
import Layout from '../../layout/Layout'
import colors from '../../styles/colors'
import { DataSaverOff, Article, MonitorHeart, Interests, VolunteerActivism } from '@mui/icons-material';
import MyOrdersCard from './../../components/Card/MyOrdersCard';
import ServicesBox from './../../components/Box/ServicesBox';
import OrderStatusDialog from '../../components/Dialog/OrderStatusDialog'

function Order() {

    return (
        <Layout>
            <Box sx={{ px: 2, pt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Box sx={{ borderRadius: "8px", bgcolor: colors.white, }}>
                            <Box display="flex" justifyContent="center">
                                <Typography variant='h6' sx={{ color: colors.secondary }}>My Orders</Typography>
                            </Box>
                            <Box width="100%" display="flex" justifyContent="center">
                                <MyOrdersCard orderId="3214" amount="AED 100" status="Completed" />
                            </Box>
                            <Box width="100%" display="flex" justifyContent="center">
                                <MyOrdersCard orderId="3214" amount="AED 100" status="Quoted" />
                            </Box>
                            <Box width="100%" display="flex" justifyContent="center">
                                <MyOrdersCard orderId="3214" amount="AED 100" status="Accepted" />
                            </Box>
                            <Box width="100%" display="flex" justifyContent="center">
                                <MyOrdersCard orderId="3214" amount="AED 100" status="Confirmed" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <ServicesBox content={"Upload Prescription"} title={"Upload"} url={'/prescription'}
                            images={<MonitorHeart sx={{
                                backgroundColor: colors.bg2, color: colors.front2, fontSize: '50px', borderRadius: "10px", padding: "10px"
                            }} />} />
                        <Box pt={2}>
                            <ServicesBox content={"Request Medication"} title={"Request"} url={'/request-medication'}
                                images={<Interests sx={{
                                    backgroundColor: colors.bgHeart, color: colors.frontHeart, fontSize: '50px', borderRadius: "10px", padding: "10px"
                                }}
                                />} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}

export default Order
