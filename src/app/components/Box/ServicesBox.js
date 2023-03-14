import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import Medication from '@mui/icons-material';
import colors from '../../styles/colors'
import { useNavigate } from 'react-router-dom';

function ServicesBox({ content, images, title, url }) {
    // boxShadow: `0px 8px 24px ${colors.shadow}`
    const navigate = useNavigate()
    return (
        <Card sx={{
            maxWidth: "300px", maxHeight: "250px",
            p: 1, borderRadius: "12px",
            boxShadow: `rgba(159, 162, 191, 0.18) 0px 9px 16px,
             rgba(159, 162, 191, 0.32) 0px 2px 2px` }}>

            <CardContent>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                    <Box>
                        <Typography variant='h6' sx={{ fontWeight: "bold", py: 1 }}>{content}</Typography>
                    </Box>
                    <Box sx={{ p: 2 }}> {images} </Box>
                    <Box sx={{ py: 1 }}>
                        <Typography
                            variant='button'
                            onClick={() => navigate(url)}
                            sx={{
                                bgcolor: colors.secondary, color: colors.white,
                                py: 1, px: 6, cursor: "pointer", borderRadius: "8px",
                            }}>{title}</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default ServicesBox
