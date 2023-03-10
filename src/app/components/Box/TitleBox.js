import React from 'react'
import { Box } from '@mui/material';
import Images from '../../assets/Images';

function TitleBox() {
  return (
    <Box>
      <img src={Images.homeTitle} alt="home-title" style={{ width: "100%", }} />
    </Box>
  )
}

export default TitleBox