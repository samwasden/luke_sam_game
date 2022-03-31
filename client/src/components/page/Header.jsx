import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Header({text}) {
  return (
    <Box className='header'>
      <Box className='full_box>' sx={{fontFamily: 'Centurian'}}>
        <Typography color={'primary'} variant='h1'>{text}</Typography>
      </Box>
    </Box>
  )
}
