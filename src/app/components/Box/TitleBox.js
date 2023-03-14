import React, { Fragment } from 'react'
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import Images from '../../assets/Images';
import { height } from '@mui/system';
import colors from './../../styles/colors';

function TitleBox() {
  return (
    <Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', }}>
        <Box>
          <Typography variant='h4' fontFamily="TiltNeon" sx={{ fontWeight: "bold", }}> Hello User,</Typography>
          <Typography sx={{ color: colors.subFont, fontSize: "15px" }}>How are you today?</Typography>
        </Box>
      </Box>
    </Fragment>
  )
}

export default TitleBox