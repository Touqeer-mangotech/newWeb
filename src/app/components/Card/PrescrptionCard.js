import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function PrescrptionCard({content, icon, }) {
  return (
    <Card>
        <CardContent>
        <Box sx={{display:"flex",  alignItems:"center",}}>
                <Box px={1}>
                    {icon}
                </Box>
                <Box >
                <Typography variant='h6' sx={{fontWeight:"bold", p:2}}>{content}</Typography>
                </Box>
            </Box>
        </CardContent>
    </Card>
  )
}

export default PrescrptionCard
