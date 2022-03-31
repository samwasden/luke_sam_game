import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Box className='footer'>
        <CircularProgress />
        <Typography variant='caption'>Waiting for other player...</Typography>
    </Box>
  )
}
