import React from 'react'
import { Box, Grid } from '@mui/material';
import TitleBox from '../../components/Box/TitleBox';
import Layout from '../../layout/Layout';
import ServicesBox from '../../components/Box/ServicesBox';
import Images from '../../assets/Images'
import LastOrders from '../../components/Box/LastOrders';
import SimpleCard from '../../components/Card/SimpleCard';
import { DataSaverOff, Article, MonitorHeart, Interests, VolunteerActivism } from '@mui/icons-material';
import colors from './../../styles/colors';
import BannerCard from '../../components/Card/BannerCard';
function Home() {
  return (
    <Layout>

      <Grid container >
        <Grid item xs={12} pt={5} pl={2}>
          <TitleBox />
        </Grid>
      </Grid>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={3} pt={2}>
          <Grid item xs={7}>
            <Grid container >
              <Grid item xs={12} md={12} mb={2} >
                <BannerCard title={"Order Status"}
                  icon={<Article sx={{
                    backgroundColor: colors.primary, color: colors.secondary, fontSize: '50px', borderRadius: "10px", padding: "10px"
                  }} />} />
              </Grid>
              <Grid item xs={6} md={6} mb={2} pr={1} >
                <ServicesBox content={"Upload Prescription"} title={"Upload"} url={'/prescription'}
                  images={<MonitorHeart sx={{
                    backgroundColor: colors.bg2, color: colors.front2, fontSize: '50px', borderRadius: "10px", padding: "10px"
                  }} />} />
              </Grid>
              <Grid item xs={6} md={6} mb={2} pl={1}>
                <ServicesBox content={"Request Medication"} title={"Request"} url={'/request-medication'}
                  images={<Interests sx={{
                    backgroundColor: colors.bgHeart, color: colors.frontHeart, fontSize: '50px', borderRadius: "10px", padding: "10px"
                  }}
                  />} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid container>
              <Grid item xs={12} mb={2} >
                <SimpleCard title={"My Orders"}
                  icon={<Article sx={{
                    backgroundColor: colors.bg1, color: colors.front1, fontSize: '60px', borderRadius: "30px", padding: "10px"
                  }} />} />
              </Grid>
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