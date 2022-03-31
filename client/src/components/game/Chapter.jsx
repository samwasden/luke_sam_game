import { Box, Button } from '@mui/material'
import React from 'react'

export default function Chapter({selectChapter}) {
  return (
    <Box className='page centered'>
        <Box className='layout_box'>
            <Box className='full_stacked_box'>
                {[...Array(9)].map((c, i) => {
                    return (
                        <Box key={i} className='full_box'>
                            <Button
                                fullWidth
                                variant='contained'
                                onClick={(e) => selectChapter(e.target.value)}
                                size='large'
                                value={i + 1}
                            >
                                Chapter {i + 1}
                            </Button>
                        </Box> 
                    )
                })}
            </Box>
        </Box>
    </Box>
  )
}
