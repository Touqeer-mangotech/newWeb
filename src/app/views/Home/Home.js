import React from 'react'
import { Box, Grid } from '@mui/material';
import Header from '../../layout/Header';
import TitleBox from '../../components/Box/TitleBox';
import Layout from '../../layout/Layout';
import ServicesBox from '../../components/Box/ServicesBox';
import Images from '../../assets/Images'
function Home() {
  return (
    <Layout>
      <Box sx={{p:2}}>
      <Grid container >
        <Grid item xs={12}>
          <TitleBox />
        </Grid>
      </Grid>
      <Grid container spacing={2} pt={2}>
        <Grid item xs={4} >
          <ServicesBox content={"Upload Prescription"}title={"Upload"} url={'/prescription'} images={Images.capsule}/>
        </Grid>
        <Grid item xs={4}>
          <ServicesBox content={"Request Medication"}title={"Request"} url={'/request-medication'} images={Images.heart}/>
        </Grid>
        <Grid item xs={4}>
          <ServicesBox content={"My Orders"}title={"Orders"} url={"/orders"} images={Images.capsule}/>
        </Grid>
      </Grid>
      </Box>
    </Layout>
  )
}

export default Home