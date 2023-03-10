import React from 'react'
import { Box, Grid } from '@mui/material';
import Header from '../../layout/Header';
import TitleBox from '../../components/Box/TitleBox';
import Layout from '../../layout/Layout';

function Home() {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <TitleBox />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Home