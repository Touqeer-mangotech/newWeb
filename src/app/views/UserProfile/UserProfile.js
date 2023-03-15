import React from 'react'
import { Grid, Card, CardContent, Box, Typography, Avatar, Button } from '@mui/material'
import colors from '../../styles/colors'
import Layout from './../../layout/Layout';
import Images from '../../assets/Images';

function UserProfile() {
  return (
    <Layout>
      <Box sx={{ pt: 5, px: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card sx={{
              py: 1, borderRadius: "12px",
              boxShadow: `rgba(159, 162, 191, 0.18) 0px 9px 16px,
             rgba(159, 162, 191, 0.32) 0px 2px 2px`,
            }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", pb: 0.5 }}>
                  <Avatar alt="Remy Sharp" src={Images.dUser} sx={{ width: 150, height: 150 }} />
                </Box>
                <Box sx={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "12px", bgcolor: colors.hexGray,
                  my: 1, p: 2, width: "100%"
                }} >
                  <Typography variant='h5' sx={{ fontWeight: "bold" }}>Sriptio User</Typography>
                </Box>
                <Box sx={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "12px", bgcolor: colors.hexGray,
                  my: 2, p: 2, width: "100%"
                }} >
                  <Typography variant='body1' sx={{ textAlign: "center" }}> Full Stack Developer
                    Bay Area, San Francisco, CA</Typography>
                </Box>
                <Box sx={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "100%", py: 1
                }} >
                  <Button
                    sx={{
                      fontSize: "12px", textTransform: 'none',
                      color: colors.white, bgcolor: colors.primary,
                      '&:hover': { bgcolor: colors.secondary, transition: '0.3s ease-in-out' },
                    }}>
                    <Typography>Delete Profile</Typography>
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Card sx={{
              py: 1, mr: 1.5, borderRadius: "12px",
              boxShadow: `rgba(159, 162, 191, 0.18) 0px 9px 16px,
             rgba(159, 162, 191, 0.32) 0px 2px 2px`,
            }}>
              <CardContent>

                <Box sx={{
                  display: "flex", alignItems: "center",
                  width: "100%", my: 1, p: 2, borderBottom: 1,
                  borderBottomColor: colors.silver,
                }} >
                  <Typography sx={{ fontWeight: "bold", fontSize: "16px", pr: 1 }}>Name: </Typography>
                  <Typography sx={{ fontSize: "16px", pl: 1 }}>Scriptio User</Typography>
                </Box>
                <Box sx={{
                  display: "flex", alignItems: "center",
                  width: "100%", my: 1, p: 2, borderBottom: 1,
                  borderBottomColor: colors.silver,
                }} >
                  <Typography sx={{ fontWeight: "bold", fontSize: "16px", pr: 1 }}>Email: </Typography>
                  <Typography sx={{ fontSize: "16px", pl: 1 }}>userabcd@gmail.com</Typography>
                </Box>
                <Box sx={{
                  display: "flex", alignItems: "center",
                  width: "100%", my: 1, p: 2, borderBottom: 1,
                  borderBottomColor: colors.silver,
                }} >
                  <Typography sx={{ fontWeight: "bold", fontSize: "16px", pr: 1 }}>Phone No: </Typography>
                  <Typography sx={{ fontSize: "16px", pl: 1 }}>+921234567</Typography>
                </Box>
                <Box sx={{
                  display: "flex", alignItems: "center",
                  width: "100%", my: 1, p: 2, borderBottom: 1,
                  borderBottomColor: colors.silver,
                }} >
                  <Typography sx={{ fontWeight: "bold", fontSize: "16px", pr: 1 }}>Mobile No: </Typography>
                  <Typography sx={{ fontSize: "16px", pl: 1 }}>+921234567</Typography>
                </Box>
                <Box sx={{
                  display: "flex", alignItems: "center",
                  width: "100%", my: 1, p: 2, borderBottom: 1,
                  borderBottomColor: colors.silver,
                }} >
                  <Typography sx={{ fontWeight: "bold", fontSize: "16px", pr: 1 }}>Address: </Typography>
                  <Typography sx={{ fontSize: "16px", pl: 1 }}>436 Brown St.Charleston, SC 29406</Typography>
                </Box>
                <Box sx={{
                  display: "flex", alignItems: "center",
                  width: "100%", my: 1, p: 2, borderBottom: 1,
                  borderBottomColor: colors.silver,
                }} >
                  <Typography sx={{ fontWeight: "bold", fontSize: "16px", pr: 1 }}>Address: </Typography>
                  <Typography sx={{ fontSize: "16px", pl: 1 }}>436 Brown St.Charleston, SC 29406</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default UserProfile