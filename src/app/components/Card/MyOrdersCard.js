import React, { useState } from 'react';
//* MUI Imports
import { Box, Card, CardContent, Typography } from '@mui/material';
import colors from '../../styles/colors';
import OrderStatusDialog from '../Dialog/OrderStatusDialog';


function MyOrdersCard(props) {
  const [open, setOpen] = useState(false)
  return (
    <Box display="flex" sx={{
      width: "70%",
      borderRadius: "10px",
      bgcolor: colors.hexGray,
      my: 1
    }} >
      <OrderStatusDialog open={open} setOpen={() => setOpen(!open)} status={props.status} />
      <Box sx={{
        bgcolor: colors.primary, width: "10px",
        height: "100%", mr: 2,
        borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px"
      }}></Box>
      <Box display="flex" justifyContent="space-between" sx={{ width: "100%" }}>
        <Box >
          <Box sx={{ display: 'flex', py: 1 }}>
            <Typography > Order Id :</Typography>
            <Typography sx={{ fontWeight: "bold" }}>{props.orderId}</Typography>
          </Box>
          <Box sx={{ display: 'flex', py: 1 }}>
            <Typography >Amount : </Typography>
            <Typography sx={{ fontWeight: "bold" }}>{props.amount}</Typography>
          </Box>
          <Box sx={{ py: 1 }}>
            <Typography >22 Feb 2023</Typography>
            <Typography >10:30 PM</Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" sx={{ px: 3, }}>
          <Typography
            onClick={() => setOpen(!open)}
            sx={{
              textAlign: "center",
              minWidth: "80px",
              fontSize: "11px",
              bgcolor: props.status === "Quoted" ? colors.quoted :
                props.status === "Confirmed" ? colors.primary :
                  props.status === "Completed" ? colors.complete : colors.secondary,
              color: colors.white,
              py: 0.7, px: 1, cursor: "pointer", borderRadius: "14px",
            }}>{props.status}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default MyOrdersCard