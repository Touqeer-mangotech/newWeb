import React, { Fragment } from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import Images from '../../assets/Images';
import { height } from '@mui/system';

function TitleBox() {
  return (
    <Fragment>
      {/* <img src={Images.homeTitle} alt="home-title" style={{ width: "100%", }} /> */}
        <Card>
          <CardContent>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Box>
              <img src={Images.user} alt="userImg" style={{width:'100px', height:'100px', borderRadius:"10px"}}/>
            </Box>
            <Box>
            <Typography variant='h6' sx={{fontWeight:"bold"}}> Hello User Name! Welcome to scriptio</Typography>
            <Typography>Upload your prescription, Get your medicines at your doorstep</Typography>
            </Box>
            </Box>
          </CardContent>
        </Card>
      </Fragment>
  )
}

export default TitleBox