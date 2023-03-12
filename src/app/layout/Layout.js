import { Box } from '@mui/material'
import React, { Fragment } from 'react'
import colors from '../styles/colors'
import Header from './Header'

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Box sx={{bgcolor:colors.bgColor}}>
      {children}
      </Box>
    </Fragment>
  )
}

export default Layout