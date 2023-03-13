import React from 'react'
import { Box, Grid } from '@mui/material';
import Header from '../../layout/Header';
import TitleBox from '../../components/Box/TitleBox';
import Layout from '../../layout/Layout';
import ServicesBox from '../../components/Box/ServicesBox';
import Images from '../../assets/Images'
import LastOrders from '../../components/Box/LastOrders';
function Home() {
  return (
    <Layout>

      <Grid container >
        <Grid item xs={12}>
          <TitleBox />
        </Grid>
      </Grid>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={1} pt={2}>
          <Grid item xs={8}>
            <Grid container >
              <Grid item xs={6} md={6} mb={2} >
                <ServicesBox content={"Upload Prescription"} title={"Upload"} url={'/prescription'} images={Images.capsule} />
              </Grid>
              <Grid item xs={6} md={6} mb={2}>
                <ServicesBox content={"Request Medication"} title={"Request"} url={'/request-medication'} images={Images.heart} />
              </Grid>
              <Grid item xs={6} md={6} mt={2}>
                <ServicesBox content={"My Orders"} title={"Orders"} url={""} images={Images.capsule} />
              </Grid>
              <Grid item xs={6} md={6} mt={2}>
                <ServicesBox content={"Status"} title={"Request"} url={'/request-medication'} images={Images.heart} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid Container>
              <Grid item xs={12}>
                <LastOrders />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default Home