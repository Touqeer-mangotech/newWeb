import React from 'react'
import { Avatar, Box, Typography, CardMedia, IconButton } from '@mui/material';
import colors from './../../styles/colors';
import Images from '../../assets/Images';
import { AddCircleOutline, RemoveCircleOutline, DeleteOutline, Edit, } from '@mui/icons-material';

function RequestMedCard({ data, deleteData }) {
  return (
    <Box display="flex" sx={{
      width: "100%",
      borderRadius: "10px",
      bgcolor: colors.hexGray,
      my: 1
    }}
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", p: 1 }}>
          <Typography px={1} >#1</Typography>
          <Box display="flex" alignItems="center">
            <CardMedia component={'img'} image={data.img} sx={{ pr: 1, height: "30px", width: "30px", borderRadius: "8px" }} />
            <Typography sx={{ Px: 1 }}>{data.medicine} </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: "center" }}>
            <RemoveCircleOutline sx={{
              fontSize: "15px", color: colors.primary, cursor: 'pointer',
              '&:hover': { color: colors.secondary, transition: '0.3s ease-in-out' },
            }} />
            <Typography sx={{ mx: 1 }}>10</Typography>
            <AddCircleOutline sx={{
              fontSize: "15px", color: colors.primary, cursor: 'pointer',
              '&:hover': { color: colors.secondary, transition: '0.3s ease-in-out' },
            }} />
          </Box>
          <IconButton onClick={() => deleteData(data.medicine)}>
            <DeleteOutline sx={{ color: colors.front2 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default RequestMedCard