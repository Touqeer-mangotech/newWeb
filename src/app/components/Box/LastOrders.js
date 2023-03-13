import { Card, CardContent, Box, Typography } from '@mui/material'
import React from 'react'
import colors from '../../styles/colors'

function LastOrders() {
  return (
    <Card sx={{
      minWidth: "240px", minHeight: "480px", py: 1, borderRadius: "12px",
      boxShadow: `rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px`,
    }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Orders Data </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default LastOrders