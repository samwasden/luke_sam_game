import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Join({ startGame }) {

    const [join, setjoin] = useState('')

    return (
        <Box className='page centered'>
            <Box className='layout_box'>
                <Box className='full_stacked_box'>
                    <Box className='full_box'>
                        <Button
                            fullWidth
                            variant='contained'
                            onClick={() => startGame('new')}
                            size='large'
                        >
                            New Room
                        </Button>
                    </Box>
                    <Box className='full_stacked_box'>
                        <Box className='full_box'>
                            <TextField
                                fullWidth
                                label='Room Name'
                                variant='outlined'
                                autoComplete='off'
                                onChange={(e) => setjoin(e.target.value)}
                            >
                                Join Room
                            </TextField>
                        </Box>
                        <Box className='full_box'>
                            <Button
                                fullWidth
                                variant='contained'
                                onClick={() => startGame(join)}
                                size='large'
                            >
                                Join Room
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
