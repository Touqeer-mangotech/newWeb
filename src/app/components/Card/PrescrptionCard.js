import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function PrescrptionCard({ title, content, icon, }) {
  return (
    <Card sx={{
      maxWidth: "300px", minHeight: "170px",
      borderRadius: "12px",
      boxShadow: `rgba(159, 162, 191, 0.18) 0px 9px 16px,
     rgba(159, 162, 191, 0.32) 0px 2px 2px`,
    }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center", }}>
          <Typography sx={{ fontWeight: "bold", }}>{title}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", }}>
          <Box px={1}>
            {icon}
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", }}>
          <Typography variant='body1' sx={{ fontWeight: "bold", p: 2 }}>{content}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PrescrptionCard
