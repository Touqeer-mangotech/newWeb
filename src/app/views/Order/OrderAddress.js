import React from 'react'
import Layout from '../../layout/Layout'
import { Box, Grid, IconButton, InputAdornment, Select, Typography } from '@mui/material';
import { EditLocationAlt, } from '@mui/icons-material';
import InputField from '../../components/Fields/InputField';
import colors from '../../styles/colors';
import SimpleButton from './../../components/Buttons/SimpleButton';
import SelectField from './../../components/Fields/SelectField';
import DataField from './../../components/Fields/DataField';

const label = ["Home", "Address", "Partner"]
function OrderAddress() {
  return (
    <Layout>
      <Box sx={{ p: 4 }}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={8} >
            <Box sx={{ p: 2, borderRadius: "8px", bgcolor: colors.white, boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 2px 0px` }}>
              <Box display="flex" justifyContent="center"><Typography variant='h6' sx={{ py: 1, fontWeight: "bold" }}>Shipping Details</Typography></Box>
              <Box sx={{ py: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sx={{ py: 1 }}>
                    <DataField label="Select Address"
                      disabled
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility"
                              edge="end">
                              <EditLocationAlt />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }} />
                  </Grid>
                  <Grid item xs={6} sx={{ py: 1 }}>
                    <DataField label="Street" />
                  </Grid>
                  <Grid item xs={6} sx={{ py: 1 }}>
                    <DataField label="Area" />
                  </Grid>
                  <Grid item xs={6} sx={{ py: 1 }}>
                    <DataField label="House/Building" />
                  </Grid>
                  <Grid item xs={6} sx={{ py: 1 }}>
                    <DataField label="Apt/Room" />
                  </Grid>
                  <Grid item xs={12} sx={{ py: 1 }}>
                    <DataField multiline rows={3} label="Notes" />
                  </Grid>
                  <Grid item xs={12} sx={{ py: 1 }}>
                    <Typography sx={{ fontWeight: "bold", pb: 1 }}>Select Label</Typography>
                    <SelectField data={label} title="Label" />
                  </Grid>
                  <Grid item xs={12} sx={{ py: 1, display: "flex", justifyContent: "center" }}>
                    <Grid item xs={6}>
                      <SimpleButton title="Save and Continue" />
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default OrderAddress