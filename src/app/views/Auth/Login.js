import React, { useState } from 'react'
import { Box, Button, Grid, InputAdornment, Typography, IconButton } from '@mui/material';
import { makeStyles } from "@mui/styles";
import InputField from '../../components/InputField';
import colors from './../../styles/colors';
import AuthButton from './../../components/Buttons/Button';
import Images from '../../assets/Images';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  bgImage: {
    backgroundImage: `url(${Images.loginImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh"
  },
  signUp: {
    textDecoration: "none",
    color: colors.primary,
    marginLeft: "6px",
  },
})

function Login() {
  const classes = useStyles();
  // *For Show Password Toggle
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Grid container className={classes.bgImage} sx={{ bgImage: Images.loginImage, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Grid item xs={12} >
        <Grid container justifyContent="center"  >
          <Grid item xs={4} sx={{
            bgcolor: colors.white,
            // mt: 10,
            pb: 2,
            borderRadius: "6px"
          }}>
            <Box sx={{ p: 2 }} display="flex" justifyContent="center">
              <Typography variant='h6' sx={{ fontSize: "20px", color: colors.secondary, fontWeight: "bold" }}>Login</Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              <InputField label="Email" />
            </Box>
            <Box sx={{ p: 2 }}>
              <InputField label="Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ px: 2 }}>
              <AuthButton title="Login" />
            </Box>
            <Box sx={{ my: 4 }}>
              <Typography
                color={colors.secondary}
                sx={{ textAlign: "center" }}
              >
                Don't have an account?
                <Link to="/sign-up" className={classes.signUp}>
                  SignUp
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Login