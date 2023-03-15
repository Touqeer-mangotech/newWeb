import { Card, CardContent, Box, Typography } from '@mui/material'
import React from 'react'
import colors from '../../styles/colors'

function LastOrders() {
  return (
    <Card sx={{
      maxWidth: "380px", maxHeight: "370px", minHeight: "370px", py: 1, borderRadius: "12px",
      boxShadow: `rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px`,
    }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: colors.hexGray, borderRadius: "6px", mx: 1, mb: 0.6 }}>
          <Typography sx={{ py: 1, fontSize: "17px", fontWeight: "bold", }}>Recent Orders</Typography>
        </Box>
        <Box display="flex" sx={{
          width: "100%",
          borderRadius: "12px",
          bgcolor: colors.hexGray,
          my: 1,
          p: 2
        }} >
          <Box display="flex" justifyContent="space-between" sx={{ width: "100%" }}>
            <Box >
              <Box sx={{ display: 'flex', py: 1 }}>
                <Typography > Order Id :</Typography>
                <Typography sx={{ fontWeight: "bold" }}>#1234</Typography>
              </Box>
              <Box sx={{ display: 'flex', py: 1 }}>
                <Typography > Amount :</Typography>
                <Typography sx={{ fontWeight: "bold" }}>AED 80</Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" sx={{ px: 3, }}>
              <Typography
                sx={{
                  textAlign: "center",
                  minWidth: "80px",
                  fontSize: "11px",
                  backgroundImage: colors.accepted,
                  bgcolor: colors.accepted,
                  color: colors.white,
                  py: 0.7, px: 1, borderRadius: "14px",
                }}>Accepted</Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" sx={{
          width: "100%",
          borderRadius: "10px",
          bgcolor: colors.hexGray,
          my: 1,
          p: 2
        }} >
          <Box display="flex" justifyContent="space-between" sx={{ width: "100%" }}>
            <Box >
              <Box sx={{ display: 'flex', py: 1 }}>
                <Typography > Order Id :</Typography>
                <Typography sx={{ fontWeight: "bold" }}>#1112</Typography>
              </Box>
              <Box sx={{ display: 'flex', py: 1 }}>
                <Typography > Amount :</Typography>
                <Typography sx={{ fontWeight: "bold" }}>AED 100</Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" sx={{ px: 3, }}>
              <Typography
                sx={{
                  textAlign: "center",
                  minWidth: "80px",
                  fontSize: "11px",
                  backgroundImage: colors.quoted,
                  bgcolor: colors.quoted,
                  color: colors.white,
                  py: 0.7, px: 1, borderRadius: "14px",
                }}>Quoted</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default LastOrders