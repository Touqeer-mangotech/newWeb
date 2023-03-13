import React, { Fragment } from 'react'
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import Images from '../../assets/Images';
import { height } from '@mui/system';
import colors from './../../styles/colors';

function TitleBox() {
  return (
    <Fragment>
      {/* <img src={Images.homeTitle} alt="home-title" style={{ width: "100%", }} /> */}
      <Card sx={{
        boxShadow: `rgba(34, 51, 84, 0.1) 0px 2px 4px -3px, rgba(34, 51, 84, 0.05) 0px 5px 12px -4px`,
        bgcolor: 'rgba(255, 255, 255, 0.5)', py: 1
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ pr: 2 }}>
              <Avatar sx={{ width: "70px", height: "70px" }} variant="square" alt="UserImg" src={Images.dUser} />
            </Box>
            <Box>
              <Typography variant='h5' sx={{ fontWeight: "bold" }}> Hello User Name! Welcome to scriptio</Typography>
              <Typography sx={{ color: colors.subFont, fontSize: "15px" }}>Upload your prescription, Get your medicines at your doorstep</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Fragment>
  )
}

export default TitleBox