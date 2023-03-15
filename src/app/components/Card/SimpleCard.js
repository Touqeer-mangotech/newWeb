import React from 'react';
//* MUI Imports
import { Box, Card, CardContent, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import colors from './../../styles/colors';

function SimpleCard(props) {
  return (
    <Card display="flex" sx={{
      maxWidth: "380px",
      borderRadius: "12px", boxShadow: `rgba(159, 162, 191, 0.18) 0px 9px 16px,
    rgba(159, 162, 191, 0.32) 0px 2px 2px`, py: 1.5
    }} >
      <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
        <Box display="flex" >
          <Box display="flex" alignItems="center" sx={{ pr: 1 }}>
            {props.icon}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', pl: 1 }}>
            <Typography sx={{ fontWeight: "bold" }}>
              {props.title}
            </Typography>
            <Typography >Click here to see all your previous orders.</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default SimpleCard