import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function PrescrptionCard({ content, icon, }) {
  return (
    <Card sx={{
      maxWidth: "300px", minHeight: "170px",
      borderRadius: "12px",
      boxShadow: `rgba(159, 162, 191, 0.18) 0px 9px 16px,
     rgba(159, 162, 191, 0.32) 0px 2px 2px`,
    }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", }}>
          <Box px={1}>
            {icon}
          </Box>
          <Box >
            <Typography variant='h6' sx={{ fontWeight: "bold", p: 2 }}>{content}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PrescrptionCard
