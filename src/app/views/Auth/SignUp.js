import React, { useState } from 'react'
import { Box, Button, Grid, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import InputField from '../../components/Fields/InputField';
import colors from './../../styles/colors';
import AuthButton from './../../components/Buttons/Button';
import Images from '../../assets/Images';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

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
  const [loading, setLoading] = useState(false);

  // *For Show Password Toggle
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const createAccount = async (formData) => {
    console.log("🚀 ~ file: SignUp.js:38 ~ createAccount ~ formData:", formData)
    setLoading(true);
    try {
      let obj = {
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      }
      console.log("🚀 ~ file: Register.js:67 ~ onSignUp ~ obj", obj)
    }
    catch (error) {

    }
  }
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
            <Typography component="form" onSubmit={handleSubmit(createAccount)}>
              <Box sx={{ p: 2 }}>
                <InputField label="Phone Number" type="tel"
                  error={errors?.email?.message}
                  register={register("phone", {
                    required: "Please enter your Phone Number.",
                    pattern: {
                      message: "Please enter your Phone Number for registration.",
                    },
                  }
                  )}
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <InputField label="Email" type="email"
                  error={errors?.email?.message}
                  register={register("email", {
                    required: "Please enter your email.",
                    pattern: {
                      message: "Please enter your email for registration.",
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
              <Box sx={{ p: 2 }}>
                <InputField label="Confirm Password" type={showConfirmPassword ? 'text' : 'password'}
                  error={errors?.confirmPassword?.message}
                  register={register("confirmPassword", {
                    required: "Please re-type your password.",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters.",
                    },
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          edge="end">
                          {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
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
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SignUp