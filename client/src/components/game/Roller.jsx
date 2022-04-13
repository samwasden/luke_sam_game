import { Modal, Box } from '@mui/material'
import React from 'react'

export default function Roller({open, setopen}) {
  return (
    <Modal
        sx={{
            backdropFilter: 'blur(5px)'
        }}
        open={open}
        onClose={() => setopen(false)}
    >
        <Box className='modal'>
            <Box className='full_box'>

            </Box>
        </Box>
    </Modal>
  )
}
