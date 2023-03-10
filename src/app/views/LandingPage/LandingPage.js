import React from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography, } from '@mui/material';
import { Menu } from '@mui/icons-material';
import colors from '../../styles/colors';
import { useNavigate } from 'react-router-dom';
function LandingPage() {
  const navigate = useNavigate()
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box width="100%" display="flex" justifyContent="space-between">
            <Box>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Scriptio
              </Typography>
            </Box>
            <Box>
              <Button onClick={() => { navigate('/login') }} sx={{ color: colors.white }} >Login</Button>
              <Button onClick={() => { navigate('/sign-up') }} sx={{ color: colors.white }}>Sign up</Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default LandingPage