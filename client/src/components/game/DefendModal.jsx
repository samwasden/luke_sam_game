import { Modal, Box } from '@mui/material'
import React from 'react'

export default function DefendModal({open, setopen}) {
  return (
    <Modal
        open={open}
        onClose={() => setopen(false)}
    >
        <Box className='modal'>
            Hello
        </Box>
    </Modal>
  )
}
