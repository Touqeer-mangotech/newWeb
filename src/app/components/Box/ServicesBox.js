import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import Medication from '@mui/icons-material';
import colors from '../../styles/colors'
import { useNavigate } from 'react-router-dom';

function ServicesBox({content, images, title, url}) {
    const navigate = useNavigate()
  return (
    <Card sx={{p:1}}>
        <CardContent>
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center",}}>
                <Box>
                <Typography variant='h6' sx={{fontWeight:"bold", py:1}}>{content}</Typography>
                </Box>
                <Box>
                    <img src={images}/>
                </Box>
                <Box sx={{py:1}}>
                    <Typography
                    variant='button'
                    onClick={()=>navigate(url)} 
                    sx={{
                        bgcolor:colors.secondary, color:colors.white,
                        py:1, px:6, cursor:"pointer", borderRadius:"8px",
                         }}>{title}</Typography>
                </Box>
            </Box>
        </CardContent>
    </Card>
  )
}

export default ServicesBox
