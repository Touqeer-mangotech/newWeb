import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import InputField from '../../components/Fields/InputField';
import colors from './../../styles/colors';
import AuthButton from './../../components/Buttons/Button';
import Images from '../../assets/Images';
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
function SignUp() {
  const classes = useStyles()
  return (
    <Grid container className={classes.bgImage} sx={{ bgImage: Images.loginImage, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Grid item xs={12} >
        <Grid container justifyContent="center"  >
          <Grid item xs={4} sx={{
            bgcolor: colors.white,
            pb: 2,
            borderRadius: "6px"
          }}>
            <Box sx={{ p: 2 }} display="flex" justifyContent="center">
              <Typography variant='h6' sx={{ fontSize: "20px", color: colors.secondary, fontWeight: "bold" }}>Sign Up</Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              <InputField label="Phone Number" />
            </Box>
            <Box sx={{ p: 2 }}>
              <InputField label="Email" />
            </Box>
            <Box sx={{ p: 2 }}>
              <InputField label="Password" />
            </Box>
            <Box sx={{ p: 2 }}>
              <InputField label="Confirm Password" />
            </Box>
            <Box sx={{ p: 2 }}>
              <Typography>Already Have An Account?
                <Link to="/login" className={classes.signUp}>
                  Login
                </Link>
              </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              <AuthButton title="Sign Up" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SignUp