import React, { useState } from 'react';
//* MUI Imports
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import colors from '../../styles/colors';
import OrderStatusDialog from '../Dialog/OrderStatusDialog';
import { Wysiwyg } from '@mui/icons-material';

function MyOrdersCard(props) {
  const [open, setOpen] = useState(false)
  return (
    <Box display="flex" sx={{
      width: "90%",
      borderRadius: "10px",
      bgcolor: colors.hexGray,
      my: 1
    }} >
      <OrderStatusDialog open={open} setOpen={() => setOpen(!open)} status={props.status} />
      <Box sx={{
        backgroundImage: props.status === "Completed" ? colors.TopDownGradient :
          props.status === "Quoted" ? colors.quotedTopDown :
            props.status === "Accepted" ? colors.acceptedTopDown : null,
        bgcolor: colors.primary, width: "10px",
        height: "100%", mr: 2,
        borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px"
      }}></Box>
      <Box display="flex" justifyContent="space-between" sx={{ width: "100%" }}>
        <Box >
          <Box sx={{ display: 'flex', alignItems: 'center', py: 1 }}>
            <Typography pr={1} > Order Id :</Typography>
            <Typography sx={{ fontWeight: "bold", Px: 1 }}>{props.orderId}</Typography>
            <Typography pl={1} >Amount : </Typography>
            <Typography sx={{ fontWeight: "bold", pl: 1 }}>{props.amount}</Typography>
          </Box>
          <Box sx={{ display: 'flex', pb: 1 }}>
            <Typography variant='body2' >22 Feb 2023</Typography>
            <Typography variant='body2'>10:30 PM</Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" sx={{ px: 3, }}>
          <Typography
            sx={{
              textAlign: "center", minWidth: "80px", fontSize: "11px",
              backgroundImage: props.status === "Completed" ? colors.primaryGradient :
                props.status === "Quoted" ? colors.quoted :
                  props.status === "Accepted" ? colors.accepted :
                    props.status === "Confirmed" ? colors.confirmed : colors.requested,
              bgcolor: props.status === "Quoted" ? colors.quoted :
                props.status === "Accepted" ? colors.accepted : colors.secondary,
              color: colors.white,
              py: 0.7, px: 1, borderRadius: "11px",
            }}>{props.status}</Typography>
          <IconButton mx={1}>
            <Wysiwyg
              onClick={() => setOpen(!open)}
              sx={{ color: colors.primary, cursor: "pointer", }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default MyOrdersCard