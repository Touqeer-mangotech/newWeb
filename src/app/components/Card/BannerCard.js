import React from 'react';
//* MUI Imports
import { Box, Card, CardContent, Typography } from '@mui/material';
import colors from '../../styles/colors';
import Images from './../../assets/Images';

function BannerCard(props) {
  return (
    <Box sx={{
      display: "flex", justifyContent: "space-between",
      bgcolor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: "12px", boxShadow: `rgba(34, 51, 84, 0.1) 0px 2px 4px -3px, 
      rgba(34, 51, 84, 0.05) 0px 5px 12px -4px`, py: 2, minHeight: "235px"
    }} >
      <Box>
        <Box sx={{ py: 1, px: 3 }}>
          <Typography variant='h4' fontFamily="TiltNeon" fontWeight="bold" >We Will Deliver Your Medicine</Typography>
        </Box>
        <Box sx={{ px: 3, pt: 5 }}>
          <Typography
            variant='button'
            sx={{
              bgcolor: colors.secondary, color: colors.white, fontWeight: "bold",
              py: 1, px: 4, cursor: "pointer", borderRadius: "6px",
            }}>Order Now</Typography>
        </Box>
      </Box>
      <Box sx={{ p: 1 }}>
        <img src={Images.banner} alt="Banner" style={{ width: "210px", height: "200px" }} />
      </Box>
    </Box>
  )
}

export default BannerCard