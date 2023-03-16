import React, { useState } from 'react'
import { Box, Button, Grid, InputAdornment, Typography, IconButton } from '@mui/material';
import { makeStyles } from "@mui/styles";
import InputField from '../../components/Fields/InputField';
import colors from './../../styles/colors';
import AuthButton from './../../components/Buttons/Button';
import Images from '../../assets/Images';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  // *For Show Password Toggle
  const [showPassword, setShowPassword] = useState(false);

  // *For Submit Login Form
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleLogin = async (formData) => {
    setLoading(true);
    try {
      let obj = {
        email: formData.email,
        password: formData.password,
      }
      console.log("🚀 ~ file: Login.js:45 ~ handleLogin ~ obj:", obj)
    }
    catch (error) {

    }
    finally {
    }
  }
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
            <Typography component="form" onSubmit={handleSubmit(handleLogin)}>
              <Box sx={{ p: 2 }}>
                <InputField label="Email" type="email"
                  error={errors?.email?.message}
                  register={register("email", {
                    required: "Please enter your name.",
                    pattern: {
                      message: "Please enter your name for registration.",
                    },
                  }
                  )}
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <InputField label="Password" type={showPassword ? 'text' : 'password'}
                  error={errors?.password?.message}
                  register={register("password", {
                    required: "Please enter password.",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters.",
                    },
                  })}
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
                <AuthButton title="Login" type="submit" onClick={() => navigate('/home')} />
              </Box>
            </Typography>
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