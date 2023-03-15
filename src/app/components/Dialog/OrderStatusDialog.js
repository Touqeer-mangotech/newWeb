import { Box, Card, CardMedia, Dialog, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import React from 'react'
import Images from '../../assets/Images'
import colors from '../../styles/colors'
import InputField from '../Fields/InputField'
import { CreditCard, Restore } from '@mui/icons-material';

function OrderStatusDialog({ open, setOpen, status }) {
  return (
    <Dialog onClose={setOpen} open={open}
      PaperProps={{
        style: {
          borderRadius: "10px",
          minWidth: "500px",
          maxWidth: "500px",
          maxHeight: "600px",
        },
      }}
    >
      <Box sx={{
        display: "flex", justifyContent: "center", fontWeight: "bold"
        // color: colors.secondary
      }}>
        <DialogTitle>Order Status</DialogTitle>
      </Box>
      <DialogContent>
        <Box>
          <Card sx={{ display: "flex", justifyContent: "center", m: 1 }}>
            <Box width="100%" p={1} display="flex" alignItems="center" justifyContent="space-evenly">
              <Typography >Status : </Typography>
              <Typography variant='h6' sx={{
                color: status === "Completed" ? colors.complete : status === "Quoted" ? colors.quoted : colors.primary
              }}>{status}</Typography>
            </Box>
          </Card>
          <Card sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ px: 5, borderRight: 1 }}>
              <Typography >Order Id</Typography>
              <Typography sx={{ fontWeight: "bold", color: colors.primary }}>#4562</Typography>
            </Box>
            <Box sx={{ px: 5 }}>
              <Typography>Date & Time</Typography>
              <Typography sx={{ fontWeight: "bold", color: colors.primary }}>02/12/2022</Typography>
            </Box>
          </Card>
          <Box sx={{
            my: 1, borderRadius: "12px",
            boxShadow: `rgba(159, 162, 191, 0.18) 0px 9px 16px, 
            rgba(159, 162, 191, 0.32) 0px 2px 2px`,
          }}>
            <Box sx={{ p: 0.5 }}><Typography>Prescription</Typography></Box>
            <CardMedia component={'img'} image={Images.prescript}
              sx={{ height: "120px", width: "450px", }}
            />
          </Box>
          <Box sx={{
            my: 1, borderRadius: "12px",
            boxShadow: `rgba(159, 162, 191, 0.18) 0px 9px 16px, 
            rgba(159, 162, 191, 0.32) 0px 2px 2px`,
          }}>
            <Box sx={{ p: 0.5 }}><Typography>Delivery Address</Typography></Box>
            <CardMedia component={'img'} image={Images.map}
              sx={{ height: "120px", width: "450px", }}
            />
            <Box sx={{ p: 0.5, }}><Typography sx={{ fontWeight: "bold", fontSize: "11px" }}>Sunny Apartment </Typography></Box>
          </Box>
          <Box sx={{
            my: 1, borderRadius: "12px",
            boxShadow: `rgba(159, 162, 191, 0.18) 0px 9px 16px, 
            rgba(159, 162, 191, 0.32) 0px 2px 2px`,
          }}>
            <Box sx={{ p: 0.5, }}>
              <Box display="flex" alignItems="center">
                <CreditCard sx={{ m: 1, color: colors.front2 }} />
                <Typography sx={{ fontWeight: "bold", }}>Total Bill </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography sx={{ p: 1 }}>Amount</Typography>
                <Typography sx={{ fontWeight: "bold", p: 1 }}>AED 230</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography sx={{ p: 1 }}>Delivery Charges</Typography>
                <Typography sx={{ fontWeight: "bold", p: 1 }}> AED 20</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography sx={{ fontWeight: "bold", p: 1 }}>Total Amount</Typography>
                <Typography sx={{ fontWeight: "bold", p: 1 }}> AED 250</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{
            my: 1, borderRadius: "12px",
            boxShadow: `rgba(159, 162, 191, 0.18) 0px 9px 16px, 
            rgba(159, 162, 191, 0.32) 0px 2px 2px`,
          }}>
            <Box sx={{ p: 0.5, }}>
              <Box display="flex" alignItems="center">
                <Restore sx={{ m: 1, color: colors.front2 }} />
                <Typography sx={{ fontWeight: "bold", }}>Order Log </Typography>
              </Box>
              <Box >
                <Typography sx={{ p: 1, color: colors.primary, fontWeight: "bold" }}>Offer Quoted</Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: "11px", px: 1 }}>You have recieved the offer of AED 90</Typography>
                <Box display="flex">
                  <Typography sx={{ fontWeight: "bold", p: 1 }}> Message:</Typography>
                  <Typography sx={{ p: 1 }}> Only Arenic is not available for now. sorry for the inconvenience.</Typography>
                </Box>
              </Box>
              <Box >
                <Typography sx={{ p: 1, color: colors.primary, fontWeight: "bold" }}>Offer Rejected</Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: "11px", px: 1 }}>You have received the offer of AED 90</Typography>
                <Box display="flex">
                  <Typography sx={{ fontWeight: "bold", p: 1 }}> Message:</Typography>
                  <Typography sx={{ p: 1 }}> Only Arenic is not available for now. sorry for the inconvenience.</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {status !== "Completed" ?
            <Box display="flex" justifyContent="space-evenly">
              <Typography
                onClick={setOpen}
                sx={{
                  textAlign: "center",
                  minWidth: "110px",
                  fontSize: "11px",
                  bgcolor: colors.secondary,
                  color: colors.white,
                  py: 0.7, px: 1, cursor: "pointer", borderRadius: "14px",
                }}>Accept</Typography>
              <Typography
                onClick={setOpen}
                sx={{
                  textAlign: "center",
                  minWidth: "110px",
                  fontSize: "11px",
                  bgcolor: colors.frontHeart,
                  color: colors.white,
                  py: 0.7, px: 1, cursor: "pointer", borderRadius: "14px",
                }}>Reject</Typography>
            </Box>
            :
            null
          }
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default OrderStatusDialog